import { HoverfocusDirective } from './hoverfocus.directive';
import { TestBed, ComponentFixture } from '@angular/core/testing';
import { Component, DebugElement } from "@angular/core";
import { By } from "@angular/platform-browser";
@Component({
  template: `<input type="text" appHoverfocus>`
})
class TestHoverFocusComponent {
}

describe('Directive: HoverFocus', () => {

  let component: TestHoverFocusComponent;
  let fixture: ComponentFixture<TestHoverFocusComponent>;
  let inputEl: DebugElement;

  beforeEach(() => {
      TestBed.configureTestingModule({
          declarations: [TestHoverFocusComponent, HoverfocusDirective]
      });
      fixture = TestBed.createComponent(TestHoverFocusComponent);
      component = fixture.componentInstance;
      inputEl = fixture.debugElement.query(By.css('input'));
  });

  it('hovering over input', () => {
      inputEl.triggerEventHandler('mouseover', null);
      fixture.detectChanges();
      expect(inputEl.nativeElement.style.backgroundColor).toBe('blue');

      inputEl.triggerEventHandler('mouseout', null);
      fixture.detectChanges();
      expect(inputEl.nativeElement.style.backgroundColor).toBe('inherit');
  });
});
