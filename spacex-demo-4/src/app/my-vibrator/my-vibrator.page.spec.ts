import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyVibratorPage } from './my-vibrator.page';

describe('MyVibratorPage', () => {
  let component: MyVibratorPage;
  let fixture: ComponentFixture<MyVibratorPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyVibratorPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyVibratorPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
