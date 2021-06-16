import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessionalBoardComponent } from './professional-board.component';

describe('ProfessionalBoardComponent', () => {
  let component: ProfessionalBoardComponent;
  let fixture: ComponentFixture<ProfessionalBoardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProfessionalBoardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessionalBoardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
