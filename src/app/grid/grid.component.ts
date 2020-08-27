import { Component, OnInit, Input, NgZone } from '@angular/core';
import { Grid } from './grid';
import { Conway } from './conway';
import { TimerSingleton } from './timer';
import { SetupForm } from '../setup-form/setup-form';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() rows = 10;
  @Input() cols = 10;
  @Input() waitMillisAfterSwitchCell = 3000;
  @Input() waitMillisBetweenIterations = 1000;

  public grid: Grid;
  public progressValue = 0;
  private conway: Conway;

  constructor(private zone: NgZone) { }

  ngOnInit() {
    this.grid = new Grid(this.rows, this.cols);
    this.conway = new Conway(this.grid);

    this.conway.startIterate(this.waitMillisBetweenIterations);
  }

  formChanged(form: SetupForm) {
    const hook = !form.placeRandomCells ? () => {} : (grid: Grid, counter: number) => {
      if (counter % form.steps == 0) {
        const rownum = grid.rows;
        const colnum = grid.cols;
        for (let i = 0; i < form.cells; i++) {
          grid.setCell(Math.floor(Math.random()*rownum), Math.floor(Math.random()*colnum), true);
        }
      }
    }

    this.conway.setHook(hook);
  }

  switchCell(r: number, c: number) {
    this.restartTimer(true);

    this.grid.switchCell(r, c);

    this.setupProgressBar();
  }

  private setupProgressBar() {
    TimerSingleton.Instance.stop('progressBar');

    this.progressValue = 100;
    const progressTicksNumber = Math.floor(this.waitMillisAfterSwitchCell/1000.0);
    const progressValueDelta = 100.0/progressTicksNumber;
    const progressTicksMillis = Math.floor(this.waitMillisAfterSwitchCell/progressTicksNumber);

    TimerSingleton.Instance.repeatNTimes('progressBar', progressTicksNumber, progressTicksMillis,
      () => { 
        this.progressValue-=progressValueDelta;
        console.log(this.progressValue);
      });

  }

  restartTimer(waitBeforeStart = false) {
    this.conway.stopIterate();

    TimerSingleton.Instance.stop('startConwayIteration');

    const startIterate = this.conway.startIterate.bind(this.conway, this.waitMillisBetweenIterations);

    TimerSingleton.Instance.once('startConwayIteration', waitBeforeStart ? this.waitMillisAfterSwitchCell : 0, startIterate);
  }

  getCSSClass(r: number, c: number) {
    return (this.grid.getCell(r, c) ? 'cell-live' : 'cell-dead');
  }

  getWidth(): string {
    return (100.0 / this.cols) + '%';
  }

  speedChanged(speed: number) {
    this.waitMillisBetweenIterations = speed;
    this.restartTimer();
    console.log(speed);
  }

}
