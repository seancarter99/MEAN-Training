import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewMovie2Component } from './new-movie2.component';

describe('NewMovie2Component', () => {
  let component: NewMovie2Component;
  let fixture: ComponentFixture<NewMovie2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewMovie2Component ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewMovie2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
