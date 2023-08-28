import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AngLifeComponent } from './ang-life.component';

describe('AngLifeComponent', () => {
  let component: AngLifeComponent;
  let fixture: ComponentFixture<AngLifeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AngLifeComponent]
    });
    fixture = TestBed.createComponent(AngLifeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
