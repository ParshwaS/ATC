/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { FYAComponent } from './FYA.component';

describe('FYAComponent', () => {
  let component: FYAComponent;
  let fixture: ComponentFixture<FYAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FYAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FYAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
