import { Grid } from './grid';
import { TimerSingleton } from './timer';

export function NewCellValue(isAlive: boolean, neighbours: number): boolean {
  if (!isAlive && neighbours === 3) {
    return true;
  }

  if (!isAlive) { return false; }

  if (neighbours < 2 || neighbours > 3) {
    return false;
  }

  return isAlive;
}

export class Conway {
  private counter = 0;
  private hook: Function = () => {};

  constructor (public grid: Grid) {
  }

  setHook(hook: Function) {
    this.hook = hook;
  }

  startIterate(timeout: number) {
    const callBack = this.iterate.bind(this);
    TimerSingleton.Instance.repeat('conway', timeout, callBack);
  }

  stopIterate() {
    TimerSingleton.Instance.stop('conway');
  }

  public iterate() {
    this.counter++;

    const newGrid = new Grid(this.grid.rows, this.grid.cols);
    for (let r = 0; r < this.grid.rows; r++) {
      for (let c = 0; c < this.grid.cols; c++) {
        const numNeighbours = this.grid.numberOfLiveNeighbours(r, c);

        const isAlive = this.grid.getCell(r, c);

        newGrid.setCell(r, c, NewCellValue(isAlive, numNeighbours));
      }
    }

    //if (this.grid.equals(newGrid)) {
    //  this.stopIterate();
    //}

    this.grid.setWithGrid(newGrid);

    this.hook(this.grid, this.counter);
  }
}
