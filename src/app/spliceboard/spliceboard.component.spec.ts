import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SpliceboardComponent } from './spliceboard.component';

describe('SpliceboardComponent', () => {
  let component: SpliceboardComponent;
  let fixture: ComponentFixture<SpliceboardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SpliceboardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SpliceboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
