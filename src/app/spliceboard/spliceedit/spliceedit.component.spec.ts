import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpliceeditComponent } from './spliceedit.component';

describe('SpliceeditComponent', () => {
  let component: SpliceeditComponent;
  let fixture: ComponentFixture<SpliceeditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpliceeditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpliceeditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
