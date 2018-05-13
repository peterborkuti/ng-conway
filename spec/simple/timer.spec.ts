import { TimerSingleton } from '../../src/app/grid/timer';

describe('TimerSingleton', () => {
  let timerCallback;

  beforeEach(function() {
    timerCallback = jasmine.createSpy('timerCallback');
    jasmine.clock().install();
  });

  afterEach(function() {
    jasmine.clock().uninstall();
  });

  it('should start a timer repeatedly', () => {
    const timer = TimerSingleton.Instance;

    timer.repeat('timeid', 100, function() {timerCallback(); });

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(101);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(1);

    jasmine.clock().tick(50);
    expect(timerCallback.calls.count()).toEqual(2);

    timer.stop('timeid');
  });
  it('should stop a timer', () => {
    const timer = TimerSingleton.Instance;

    timer.repeat('timeid2', 100, function() {timerCallback(); });

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(202);
    expect(timerCallback.calls.count()).toEqual(2);

    timer.stop('timeid2');

    jasmine.clock().tick(202);
    expect(timerCallback.calls.count()).toEqual(2);
  });
  it('should restart timer after stopping it', () => {
    const timer = TimerSingleton.Instance;

    timer.repeat('timeid3', 100, function() {timerCallback(); });

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(202);
    expect(timerCallback.calls.count()).toEqual(2);

    timer.stop('timeid3');

    jasmine.clock().tick(202);
    expect(timerCallback.calls.count()).toEqual(2);

    timer.repeat('timeid3', 100, function() {timerCallback(); });
    jasmine.clock().tick(202);
    expect(timerCallback.calls.count()).toEqual(4);
  });
  it('should call once', () => {
    const timer = TimerSingleton.Instance;

    timer.once('timeid4', 100, function() {timerCallback(); });

    expect(timerCallback).not.toHaveBeenCalled();

    jasmine.clock().tick(202);
    expect(timerCallback.calls.count()).toEqual(1);
  });
});
