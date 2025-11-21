import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCardDashboard } from './top-card-dashboard';

describe('TopCardDashboard', () => {
  let component: TopCardDashboard;
  let fixture: ComponentFixture<TopCardDashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCardDashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCardDashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
