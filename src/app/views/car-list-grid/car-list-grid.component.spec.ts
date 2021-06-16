import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CarListGridComponent } from './car-list-grid.component';

describe('CarListGridComponent', () => {
  let component: CarListGridComponent;
  let fixture: ComponentFixture<CarListGridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CarListGridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CarListGridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
