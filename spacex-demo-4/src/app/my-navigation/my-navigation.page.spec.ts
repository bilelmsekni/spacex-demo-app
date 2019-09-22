import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyNavigationPage } from './my-navigation.page';

describe('MyNavigationPage', () => {
  let component: MyNavigationPage;
  let fixture: ComponentFixture<MyNavigationPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyNavigationPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyNavigationPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
