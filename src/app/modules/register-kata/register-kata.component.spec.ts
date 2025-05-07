import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegisterKataComponent } from './register-kata.component';

describe('RegisterKataComponent', () => {
  let component: RegisterKataComponent;
  let fixture: ComponentFixture<RegisterKataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegisterKataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegisterKataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
