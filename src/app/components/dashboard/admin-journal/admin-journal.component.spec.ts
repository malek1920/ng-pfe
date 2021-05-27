import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminJournalComponent } from './admin-journal.component';

describe('AdminJournalComponent', () => {
  let component: AdminJournalComponent;
  let fixture: ComponentFixture<AdminJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdminJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdminJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
