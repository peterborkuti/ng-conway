import { typeWithParameters } from '@angular/compiler/src/render3/util';

class Timer {
  constructor (public readonly jsTimerId, public fireNumber = -1) {}
}

export class TimerSingleton {
    private static _instance: TimerSingleton = new TimerSingleton();
    private timers: {[key: string]: Timer} = {};

    private constructor() {}

    public static get Instance() {
        return TimerSingleton._instance;
    }

    public repeat(timerId: string, intervalInMillis: number, callBack: () => void) {
      this.startTimer(timerId, intervalInMillis, callBack, -1);
    }

    public repeatNTimes(timerId: string, n: number, intervalInMillis: number, callBack: () => void) {
      this.startTimer(timerId, intervalInMillis, callBack, n);
    }

    public once(timerId: string, intervalInMillis: number, callBack: () => void) {
      this.startTimer(timerId, intervalInMillis, callBack, 1);
    }

    private startTimer(timerId: string, intervalInMillis: number, callBack: () => void, number = -1) {
      if (this.timers[timerId]) {
        this.stop(timerId);
      }

      const wrappedCallBack = () => {
        const timer = this.timers[timerId];

        if (!timer) return;

        if (timer.fireNumber > -1) {
          timer.fireNumber--;
        }
        if (timer.fireNumber === 0) {
          this.stop(timerId);
        }
        callBack()
      };

      let jsTimerId;

      if (number > 0) {
          jsTimerId = setInterval(wrappedCallBack, intervalInMillis);
        } else {
          jsTimerId = setInterval(callBack, intervalInMillis);
        }

      this.timers[timerId] = new Timer(jsTimerId, number);
    }

    public stop(timerId: string) {
      if (this.timers[timerId]) {
        const jsTimerId = this.timers[timerId].jsTimerId;

        clearInterval(jsTimerId);

        delete this.timers[timerId];
      }
    }
}
