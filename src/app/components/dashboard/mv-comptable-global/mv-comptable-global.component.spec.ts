import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MvComptableGlobalComponent } from './mv-comptable-global.component';

describe('MvComptableGlobalComponent', () => {
  let component: MvComptableGlobalComponent;
  let fixture: ComponentFixture<MvComptableGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MvComptableGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MvComptableGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
