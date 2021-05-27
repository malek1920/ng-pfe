import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMvComptableComponent } from './add.component';

describe('AddMvComptableComponent', () => {
  let component: AddMvComptableComponent;
  let fixture: ComponentFixture<AddMvComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMvComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMvComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
