class Timer {
  constructor (public readonly jsTimerId, public readonly once = false) {}
}

export class TimerSingleton {
    private static _instance: TimerSingleton = new TimerSingleton();
    private timers = {};

    private constructor() {}

    public static get Instance() {
        return TimerSingleton._instance;
    }

    public repeat(timerId: string, intervalInMillis: number, callBack: () => void) {
      this.startTimer(timerId, intervalInMillis, callBack);
    }

    public once(timerId: string, intervalInMillis: number, callBack: () => void) {
      this.startTimer(timerId, intervalInMillis, callBack, true);
    }

    private startTimer(timerId: string, intervalInMillis: number, callBack: () => void, once = false) {
      if (!this.timers[timerId]) {
        let jsTimerId;

        if (once) {
          const wrappedCallBack = () => (delete this.timers[timerId], callBack());

          jsTimerId = setTimeout(wrappedCallBack, intervalInMillis);
        } else {
          jsTimerId = setInterval(callBack, intervalInMillis);
        }

        this.timers[timerId] = new Timer(jsTimerId, once);
      }
    }

    public stop(timerId: string) {
      if (this.timers[timerId]) {
        const jsTimerId = this.timers[timerId].jsTimerId;
        const once = this.timers[timerId].once;

        if (once) {
          clearTimeout(jsTimerId);
        } else {
          clearInterval(jsTimerId);
        }

        delete this.timers[timerId];
      }
    }
}
