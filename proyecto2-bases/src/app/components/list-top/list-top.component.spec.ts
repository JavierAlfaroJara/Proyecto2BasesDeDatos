import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListTopComponent } from './list-top.component';

describe('ListTopComponent', () => {
  let component: ListTopComponent;
  let fixture: ComponentFixture<ListTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
