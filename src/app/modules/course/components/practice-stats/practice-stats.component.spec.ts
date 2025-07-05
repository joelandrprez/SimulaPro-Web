import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PracticeStatsComponent } from './practice-stats.component';

describe('PracticeStatsComponent', () => {
  let component: PracticeStatsComponent;
  let fixture: ComponentFixture<PracticeStatsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PracticeStatsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PracticeStatsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
