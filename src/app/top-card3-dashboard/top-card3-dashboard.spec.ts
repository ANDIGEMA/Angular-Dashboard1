import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCard3Dashboard } from './top-card3-dashboard';

describe('TopCard3Dashboard', () => {
  let component: TopCard3Dashboard;
  let fixture: ComponentFixture<TopCard3Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCard3Dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCard3Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
