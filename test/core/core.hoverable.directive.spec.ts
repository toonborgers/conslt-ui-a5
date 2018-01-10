import {Component, DebugElement} from '@angular/core';
import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HoverableDirective, STYLE_CLASS} from '../../src/core/core.hoverable.directive';
import {By} from '@angular/platform-browser';

describe('Hoverable directive', () => {
  let component: HoverableTestComponent;
  let fixture: ComponentFixture<HoverableTestComponent>;
  let div: DebugElement;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [HoverableTestComponent, HoverableDirective]
    });
    fixture = TestBed.createComponent(HoverableTestComponent);
    component = fixture.componentInstance;
    div = fixture.debugElement.query(By.css('div'));
  });

  it('Can add and remove class', () => {
    expect(fixture.debugElement.query(By.css(`.${STYLE_CLASS}`))).toBeNull();

    div.triggerEventHandler('mouseenter', null);
    expect(fixture.debugElement.query(By.css(`.${STYLE_CLASS}`))).not.toBeNull();

    div.triggerEventHandler('mouseleave', null);
    expect(fixture.debugElement.query(By.css(`.${STYLE_CLASS}`))).toBeNull();
  });
});

@Component({
  template: `
    <div cuiHoverable></div>`
})
class HoverableTestComponent {
}
