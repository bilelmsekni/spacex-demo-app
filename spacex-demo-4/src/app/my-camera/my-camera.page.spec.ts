import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyCameraPage } from './my-camera.page';

describe('MyCameraPage', () => {
  let component: MyCameraPage;
  let fixture: ComponentFixture<MyCameraPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyCameraPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyCameraPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
