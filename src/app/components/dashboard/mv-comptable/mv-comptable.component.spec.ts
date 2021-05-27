import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvComptableComponent } from './mv-comptable.component';

describe('MvComptableComponent', () => {
  let component: MvComptableComponent;
  let fixture: ComponentFixture<MvComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
