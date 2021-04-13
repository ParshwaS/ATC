/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { HangersComponent } from './Hangers.component';

describe('HangersComponent', () => {
  let component: HangersComponent;
  let fixture: ComponentFixture<HangersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HangersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HangersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
