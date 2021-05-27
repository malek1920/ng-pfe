import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMvComptableGlobalComponent } from './add.component';

describe('AddMvComptableGlobalComponent', () => {
  let component: AddMvComptableGlobalComponent;
  let fixture: ComponentFixture<AddMvComptableGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMvComptableGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMvComptableGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
