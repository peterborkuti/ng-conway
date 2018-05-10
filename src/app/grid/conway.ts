import { Grid } from './grid';

export class Conway {
  constructor (public readonly grid: Grid) {
  }

  public setCell(r: number, c: number, neighbours: number) {
    switch (neighbours) {
      case 0:
      case 1:
        this.grid.
    }
  }

  public iterate() {
    for (let r = 0; r < this.grid.rows; r++) {
      for (let c = 0; c < this.grid.cols; c++) {
        const numNeighbours = this.grid.numberOfLiveNeighbours(r, c);
        switch (numNeighbours) {
          case 0:
          case 1:
            this.grid.
        }
      }
    }
  }
}
