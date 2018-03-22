import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RunrelogsComponent } from './runrelogs.component';

describe('RunrelogsComponent', () => {
  let component: RunrelogsComponent;
  let fixture: ComponentFixture<RunrelogsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RunrelogsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RunrelogsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
