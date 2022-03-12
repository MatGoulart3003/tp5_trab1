import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TeamCompComponent } from './team-comp.component';

describe('TeamCompComponent', () => {
  let component: TeamCompComponent;
  let fixture: ComponentFixture<TeamCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TeamCompComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TeamCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
