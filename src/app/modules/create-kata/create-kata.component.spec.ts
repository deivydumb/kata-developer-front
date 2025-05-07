import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateKataComponent } from './create-kata.component';

describe('CreateKataComponent', () => {
  let component: CreateKataComponent;
  let fixture: ComponentFixture<CreateKataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateKataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateKataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
