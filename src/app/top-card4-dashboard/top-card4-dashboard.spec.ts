import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopCard4Dashboard } from './top-card4-dashboard';

describe('TopCard4Dashboard', () => {
  let component: TopCard4Dashboard;
  let fixture: ComponentFixture<TopCard4Dashboard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TopCard4Dashboard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopCard4Dashboard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
