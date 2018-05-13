export class Cell {
  constructor(private _cell = false) {}

  get cell(): boolean {
    return this._cell;
  }

  set cell(cell: boolean) {
    this._cell = cell;
  }

  public toString(): string {
    return '' + this._cell;
  }
}

export const BREAK = false;
export const CONTINUE = true;

export class Grid {
  grid: Cell[][];

  constructor (public readonly rows = 10, public readonly cols = 10) {
    this.grid = [];

    for (let r = 0; r < rows; r++) {
      this.grid.push([]);

      for (let c = 0; c < cols; c++) {
        this.grid[r].push(new Cell());
      }
    }
  }

  public eachCell = (f: (r: number, c: number, cell: Cell) => boolean) => {
    for (let r = 0; r < this.rows; r++) {
      for (let c = 0; c < this.cols; c++) {
        if (f(r, c, this.grid[r][c]) === BREAK) { return; }
      }
    }
  }

  public setWithGrid(newGrid: Grid) {
    this.eachCell((r, c, cell) => {
      cell.cell = newGrid.getCell(r, c);
      return CONTINUE;
    });
  }

  public isInGrid(row: number, col: number): boolean {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  public setCell(row: number, col: number, val: boolean) {
    if (this.isInGrid(row, col)) {
      this.grid[row][col].cell = val;
    }
  }

  public switchCell(row: number, col: number) {
    this.setCell(row, col, !this.getCell(row, col));
  }

  public getCell(row: number, col: number): boolean {
    return this.isInGrid(row, col) && this.grid[row][col].cell;
  }

  public numberOfLiveNeighbours(row: number, col: number): number {
    let neighbours = 0;

    for (let r = - 1; r < 2; r++) {
      for (let c = -1; c < 2; c++) {
        if (r === 0 && c === 0) {continue; }

        neighbours += this.getCell(row + r, col + c) ? 1 : 0;
      }
    }

    return neighbours;
  }

  public toString(): string {
    return this.grid.join(',');
  }

  public equals(otherGrid: Grid): boolean {
    if (otherGrid.rows !== this.rows || otherGrid.cols !== this.cols) {
      return false;
    }

    return this.toString() === otherGrid.toString();
  }

}
