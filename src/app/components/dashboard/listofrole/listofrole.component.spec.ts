import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofroleComponent } from './listofrole.component';

describe('ListofroleComponent', () => {
  let component: ListofroleComponent;
  let fixture: ComponentFixture<ListofroleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofroleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofroleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
