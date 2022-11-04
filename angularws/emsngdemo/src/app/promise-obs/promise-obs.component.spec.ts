import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PromiseObsComponent } from './promise-obs.component';

describe('PromiseObsComponent', () => {
  let component: PromiseObsComponent;
  let fixture: ComponentFixture<PromiseObsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PromiseObsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PromiseObsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
