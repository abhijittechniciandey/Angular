import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ServiceCompComponent } from './service-comp.component';

describe('ServiceCompComponent', () => {
  let component: ServiceCompComponent;
  let fixture: ComponentFixture<ServiceCompComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ServiceCompComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ServiceCompComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
