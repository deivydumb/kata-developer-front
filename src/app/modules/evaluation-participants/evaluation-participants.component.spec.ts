import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EvaluationParticipantsComponent } from './evaluation-participants.component';

describe('EvaluationParticipantsComponent', () => {
  let component: EvaluationParticipantsComponent;
  let fixture: ComponentFixture<EvaluationParticipantsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EvaluationParticipantsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EvaluationParticipantsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
