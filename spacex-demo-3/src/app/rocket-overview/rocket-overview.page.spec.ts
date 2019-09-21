import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RocketOverviewPage } from './rocket-overview.page';

describe('RocketOverviewPage', () => {
  let component: RocketOverviewPage;
  let fixture: ComponentFixture<RocketOverviewPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RocketOverviewPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RocketOverviewPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
