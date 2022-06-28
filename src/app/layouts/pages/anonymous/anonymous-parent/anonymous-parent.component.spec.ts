/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { AnonymousParentComponent } from './anonymous-parent.component';

describe('AnonymousParentComponent', () => {
  let component: AnonymousParentComponent;
  let fixture: ComponentFixture<AnonymousParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AnonymousParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AnonymousParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
