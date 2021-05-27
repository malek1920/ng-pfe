import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditBureauComptableComponent } from './edit.component';

describe('EditBureauComptableComponent', () => {
  let component: EditBureauComptableComponent;
  let fixture: ComponentFixture<EditBureauComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditBureauComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EditBureauComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
