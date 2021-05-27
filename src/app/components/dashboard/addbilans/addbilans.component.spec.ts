import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddbilansComponent } from './addbilans.component';

describe('AddbilansComponent', () => {
  let component: AddbilansComponent;
  let fixture: ComponentFixture<AddbilansComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddbilansComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddbilansComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
