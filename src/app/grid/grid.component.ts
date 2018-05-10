import { Component, OnInit, Input } from '@angular/core';
import { Grid } from './grid';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() rows = 10;
  @Input() cols = 10;

  public grid: Grid;

  constructor() { }

  ngOnInit() {
    this.grid = new Grid(this.rows, this.cols);
  }

  switchCell(r: number, c: number) {
    console.log('cell switched:' + r + ',' + c);
    this.grid.switchCell(r, c);
  }

  getCSSClass(r: number, c: number) {
    return (this.grid.getCell(r, c) ? 'cell-live': 'cell-dead');
  }

  getWidth(): string {
    return (100.0 / this.cols) + '%';
  }

}
