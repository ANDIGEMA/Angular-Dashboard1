import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewLeavesRequest } from './new-leaves-request';

describe('NewLeavesRequest', () => {
  let component: NewLeavesRequest;
  let fixture: ComponentFixture<NewLeavesRequest>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NewLeavesRequest]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewLeavesRequest);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
