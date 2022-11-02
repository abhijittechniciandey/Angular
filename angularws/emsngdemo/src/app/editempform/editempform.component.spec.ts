import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditempformComponent } from './editempform.component';

describe('EditempformComponent', () => {
  let component: EditempformComponent;
  let fixture: ComponentFixture<EditempformComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditempformComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditempformComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
