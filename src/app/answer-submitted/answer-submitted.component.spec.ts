import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AnswerSubmittedComponent } from './answer-submitted.component';

describe('AnswerSubmittedComponent', () => {
  let component: AnswerSubmittedComponent;
  let fixture: ComponentFixture<AnswerSubmittedComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnswerSubmittedComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnswerSubmittedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
