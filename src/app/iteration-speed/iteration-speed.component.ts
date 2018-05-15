import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-iteration-speed',
  templateUrl: './iteration-speed.component.html',
  styleUrls: ['./iteration-speed.component.css']
})
export class IterationSpeedComponent implements OnInit {
  value = 1000;

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

  hmmm(event) {
    console.log(event);
  }

}
