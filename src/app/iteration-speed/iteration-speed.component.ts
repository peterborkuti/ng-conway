import { Component, OnInit } from '@angular/core';
import {MatSliderModule} from '@angular/material/slider';

@Component({
  selector: 'app-iteration-speed',
  templateUrl: './iteration-speed.component.html',
  styleUrls: ['./iteration-speed.component.css']
})
export class IterationSpeedComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1000) {
      return Math.round(value / 1000) + 'k';
    }

    return value;
  }

}
