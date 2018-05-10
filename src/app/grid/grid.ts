export class Grid {
  grid: boolean[][];

  constructor (public readonly rows = 10, public readonly cols = 10) {
    this.grid = [];

    for (let r = 0; r < rows; r++) {
      this.grid.push([]);

      for (let c = 0; c < cols; c++) {
        this.grid[r].push(false);
      }
    }
  }

  public isInGrid(row: number, col: number): boolean {
    return row >= 0 && row < this.rows && col >= 0 && col < this.cols;
  }

  public setCell(row: number, col: number, val: boolean) {
    if (this.isInGrid(row, col)) {
      this.grid[row][col] = val;
    }
  }

  public switchCell(row: number, col: number) {
    this.setCell(row, col, !this.getCell(row, col));
  }

  public getCell(row: number, col: number): boolean {
    return this.isInGrid(row, col) && this.grid[row][col];
  }

  public toString(): string {
    return this.grid.join(',');
  }

}
