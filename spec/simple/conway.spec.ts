import { Conway, NewCellValue } from '../../src/app/grid/conway';
import { createGrid } from './utils';

describe('NewCellValue with live input', () => {
  it('should die when fewer than two live neighbours', () => {
    expect(NewCellValue(true, 0)).toBeFalsy();
    expect(NewCellValue(true, 1)).toBeFalsy();
  });
  it('should live with two or three live neighbors', () => {
    expect(NewCellValue(true, 2)).toBeTruthy();
    expect(NewCellValue(true, 3)).toBeTruthy();
  });
  it('should die with more than three live neighbors', () => {
    expect(NewCellValue(true, 4)).toBeFalsy();
    expect(NewCellValue(true, 5)).toBeFalsy();
    expect(NewCellValue(true, 6)).toBeFalsy();
    expect(NewCellValue(true, 7)).toBeFalsy();
    expect(NewCellValue(true, 8)).toBeFalsy();
  });
});

describe('getNewCellValue with dead input', () => {
  it('should born when exactly three live neighbours', () => {
    expect(NewCellValue(false, 3)).toBeTruthy();
  });
  it('should remain dead with not three live neighbours', () => {
    expect(NewCellValue(false, 0)).toBeFalsy();
    expect(NewCellValue(false, 1)).toBeFalsy();
    expect(NewCellValue(false, 2)).toBeFalsy();
    expect(NewCellValue(false, 4)).toBeFalsy();
    expect(NewCellValue(false, 5)).toBeFalsy();
    expect(NewCellValue(false, 6)).toBeFalsy();
    expect(NewCellValue(false, 7)).toBeFalsy();
    expect(NewCellValue(false, 8)).toBeFalsy();
  });
});
describe('iterate', () => {
  it('should blink', () => {
    const grid = createGrid(5, 5, '00000|00000|01110');
    const conway = new Conway(grid);
    conway.iterate();
    expect(grid.equals(createGrid(5, 5, '00000|00100|00100|00100'))).toBeTruthy();
  });
});
