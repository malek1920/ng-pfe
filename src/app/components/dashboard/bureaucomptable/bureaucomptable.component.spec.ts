import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BureaucomptableComponent } from './bureaucomptable.component';

describe('BureaucomptableComponent', () => {
  let component: BureaucomptableComponent;
  let fixture: ComponentFixture<BureaucomptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BureaucomptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BureaucomptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
