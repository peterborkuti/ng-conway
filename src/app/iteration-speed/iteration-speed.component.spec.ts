import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { IterationSpeedComponent } from './iteration-speed.component';

describe('IterationSpeedComponent', () => {
  let component: IterationSpeedComponent;
  let fixture: ComponentFixture<IterationSpeedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ IterationSpeedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(IterationSpeedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
