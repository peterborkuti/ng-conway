import { Component, OnInit, Input } from '@angular/core';
import { Grid } from './grid';
import { Conway } from './conway';
import { TimerSingleton } from './timer';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  @Input() rows = 10;
  @Input() cols = 10;
  @Input() waitMillisAfterSwitchCell = 1000;
  @Input() waitMillisBetweenIterations = 1000;

  public grid: Grid;
  private conway: Conway;

  constructor() { }

  ngOnInit() {
    this.grid = new Grid(this.rows, this.cols);
    this.conway = new Conway(this.grid);

    this.conway.startIterate(this.waitMillisBetweenIterations);
  }

  switchCell(r: number, c: number) {
    this.conway.stopIterate();

    TimerSingleton.Instance.stop('startConwayIteration');

    const startIterate = this.conway.startIterate.bind(this.conway, this.waitMillisBetweenIterations);

    TimerSingleton.Instance.once('startConwayIteration', this.waitMillisAfterSwitchCell, startIterate);

    this.grid.switchCell(r, c);
  }

  getCSSClass(r: number, c: number) {
    return (this.grid.getCell(r, c) ? 'cell-live' : 'cell-dead');
  }

  getWidth(): string {
    return (100.0 / this.cols) + '%';
  }

}
