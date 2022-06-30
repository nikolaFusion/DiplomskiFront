/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { TravelFinderComponent } from './travel-finder.component';

describe('TravelFinderComponent', () => {
  let component: TravelFinderComponent;
  let fixture: ComponentFixture<TravelFinderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TravelFinderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TravelFinderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
