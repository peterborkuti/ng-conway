import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatSliderChange } from '@angular/material/slider';

@Component({
  selector: 'app-iteration-speed',
  templateUrl: './iteration-speed.component.html',
  styleUrls: ['./iteration-speed.component.css']
})
export class IterationSpeedComponent implements OnInit {
  value = 1000;

  @Output() speedChange = new EventEmitter<number>();

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

  onChange(event: MatSliderChange) {
    console.log(event);
    this.speedChange.emit(event.value);
  }

}
