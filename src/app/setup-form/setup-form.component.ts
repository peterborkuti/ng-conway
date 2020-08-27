import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { SetupForm } from './setup-form';
import { THIS_EXPR } from '@angular/compiler/src/output/output_ast';

@Component({
  selector: 'setup-form',
  templateUrl: './setup-form.component.html',
  styleUrls: ['./setup-form.component.css']
})
export class SetupFormComponent implements OnInit {
  @Output() changeForm = new EventEmitter<SetupForm>();

  form: FormGroup;
  enableForm = true;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({cells: this.fb.control(10), steps: this.fb.control(10), placeRandomCells: this.fb.control(false)})
  }

  ngOnInit(): void {
    this.form.valueChanges.subscribe(v => this.changeForm.emit(v));
    this.form.controls.placeRandomCells.setValue(true);
  }

}
