import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PermissiontoroleComponent } from './permissiontorole.component';

describe('PermissiontoroleComponent', () => {
  let component: PermissiontoroleComponent;
  let fixture: ComponentFixture<PermissiontoroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PermissiontoroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PermissiontoroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
