import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmptemplateformComponent } from './emptemplateform.component';

describe('EmptemplateformComponent', () => {
  let component: EmptemplateformComponent;
  let fixture: ComponentFixture<EmptemplateformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmptemplateformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmptemplateformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
