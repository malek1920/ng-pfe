import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMvComptableComponent } from './edit.component';

describe('EditMvComptableComponent', () => {
  let component: EditMvComptableComponent;
  let fixture: ComponentFixture<EditMvComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditMvComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMvComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
