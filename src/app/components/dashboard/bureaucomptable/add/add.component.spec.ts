import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBureauComptableComponent } from './add.component';

describe('AddBureauComptableComponent', () => {
  let component: AddBureauComptableComponent;
  let fixture: ComponentFixture<AddBureauComptableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBureauComptableComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBureauComptableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
