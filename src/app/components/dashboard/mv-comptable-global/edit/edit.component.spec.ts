import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMvComptableGlobalComponent } from './edit.component';

describe('EditMvComptableGlobalComponent', () => {
  let component: EditMvComptableGlobalComponent;
  let fixture: ComponentFixture<EditMvComptableGlobalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMvComptableGlobalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMvComptableGlobalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
