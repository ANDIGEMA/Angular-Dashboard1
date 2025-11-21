import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCard2Dashboard } from './top-card2-dashboard';

describe('TopCard2Dashboard', () => {
  let component: TopCard2Dashboard;
  let fixture: ComponentFixture<TopCard2Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCard2Dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCard2Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
