import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgbLibComponent } from './ngb-lib.component';

describe('NgbLibComponent', () => {
  let component: NgbLibComponent;
  let fixture: ComponentFixture<NgbLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NgbLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NgbLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
