import { Grid } from './grid';

/**
 * Creates a Grid from a string contains 0 or 1
 * Other characters are skipped.
 *
 * Less [01] character than rows*cols are allowed but not more.
 *
 * Example: '000|111'
 * @param rows Number of rows
 * @param cols Number of columns
 * @param gridString
 */
export function createGrid(rows: number, cols: number, gridString: string): Grid {
  const grid = new Grid(rows, cols);

  let j = 0;
  for (let i = 0; i < gridString.length; i++) {
    const r = Math.floor(j / cols);
    const c = j - r * cols;

    if (gridString[i] === '0' || gridString[i] === '1') {
      grid.setCell(r, c, gridString[i] === '1');
      j++;
    }
  }

  return grid;
}
