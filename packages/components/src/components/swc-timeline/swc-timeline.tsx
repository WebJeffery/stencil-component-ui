import { Component, Host, h, Prop, Element } from '@stencil/core';
import { findChildrenElements } from 'src/utils/utils';

@Component({
  tag: 'swc-timeline',
  styleUrl: 'swc-timeline.css',
  shadow: true,
})
export class SwcTimeline {
  @Element() el: HTMLElement;

  @Prop({
    attribute: 'reverse',
    reflect: true,
  })
  reverse: boolean;

  render() {
    return (
      <Host>
        <slot></slot>
      </Host>
    );
  }

  componentDidLoad() {
    const reverse = this.reverse;
    const childList = findChildrenElements(this.el, 'ivy-timeline-item');
    const children = [...(childList as Array<HTMLElement>)];
    children.map(cur => {
      if (reverse !== undefined) cur.setAttribute('reverse', 'reverse');
    });
  }
}
