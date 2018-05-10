import { Grid } from '../../src/app/grid/grid';

describe('constructor', () => {
  it('should set rows and cols to 10 by default', () => {
    const grid = new Grid();

    expect(grid.cols === 10 && grid.rows === 10).toBeTruthy();
  });
  it('should set rows and cols', () => {
    const grid = new Grid(3, 5);

    expect(grid.cols === 5 && grid.rows === 3).toBeTruthy();
  });
  it('should make false cells', () => {
    const grid = new Grid(1, 1);

    expect(grid.getCell(0, 0)).toBeFalsy();
  });
});

describe('IsInGrid', () => {
  it('should return with false out of grid coords', () => {
    const grid = new Grid(1, 1);

    expect(grid.isInGrid(-1, 0)).toBeFalsy();
    expect(grid.isInGrid(0, -1)).toBeFalsy();
    expect(grid.isInGrid(1, 0)).toBeFalsy();
    expect(grid.isInGrid(0, 1)).toBeFalsy();
  });
  it('should return with true in grid coords', () => {
    const grid = new Grid(2, 2);

    expect(grid.isInGrid(0, 0)).toBeTruthy();
    expect(grid.isInGrid(0, 1)).toBeTruthy();
    expect(grid.isInGrid(1, 0)).toBeTruthy();
    expect(grid.isInGrid(1, 1)).toBeTruthy();
  });
});
describe('setCell', () => {
  it('should not throw exception for out of grid elements and should not change grid', () => {
    const grid = new Grid(1, 1);

    grid.setCell(-1, 2, true);

    expect(grid.getCell(0, 0)).toBeFalsy();
  });
  it('should set grid cells for in grid coords', () => {
    const grid = new Grid(1, 1);

    grid.setCell(0, 0, true);
    expect(grid.getCell(0, 0)).toBeTruthy();

    grid.setCell(0, 0, false);
    expect(grid.getCell(0, 0)).toBeFalsy();
  });
});
describe('switchCell', () => {
  it('should not change grid for out of grid coords', () => {
    const grid = new Grid(1, 1);

    grid.switchCell(-1, 0);
    expect(grid.getCell(0, 0)).toBeFalsy();
  });

  it('should change grid for in grid coords', () => {
    const grid = new Grid(1, 1);

    grid.switchCell(0, 0);
    expect(grid.getCell(0, 0)).toBeTruthy();

    grid.switchCell(0, 0);
    expect(grid.getCell(0, 0)).toBeFalsy();
  });
});
describe('getCell', () => {
  const grid = new Grid(1, 1);

  it('should return false for out of grid coords', () => {
    expect(grid.getCell(-1, 0)).toBeFalsy();
    expect(grid.getCell(-1, 1)).toBeFalsy();
    expect(grid.getCell(1, 0)).toBeFalsy();
    expect(grid.getCell(1, 1)).toBeFalsy();
  });

  it('should return with cell for in grid coords', () => {
    grid.setCell(0, 0, false);

    expect(grid.getCell(0, 0)).toBeFalsy();

    grid.setCell(0, 0, true);

    expect(grid.getCell(0, 0)).toBeTruthy();
  });
});
