import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketDetailsPage } from './rocket-details.page';

describe('RocketDetailsComponent', () => {
  let component: RocketDetailsPage;
  let fixture: ComponentFixture<RocketDetailsPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RocketDetailsPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketDetailsPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
