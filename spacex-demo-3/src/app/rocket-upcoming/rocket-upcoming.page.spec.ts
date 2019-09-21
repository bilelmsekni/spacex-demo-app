import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketUpcomingPage } from './rocket-upcoming.page';

describe('RocketUpcomingPage', () => {
  let component: RocketUpcomingPage;
  let fixture: ComponentFixture<RocketUpcomingPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketUpcomingPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketUpcomingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
