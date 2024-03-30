import { Component, Host, h, Prop } from '@stencil/core';

@Component({
  tag: 'swc-timeline-item',
  styleUrl: 'swc-timeline-item.css',
  shadow: true,
})
export class SwcTimelineItem {
  @Prop({
    attribute: 'timestamp',
    reflect: true,
  })
  timestamp: string = '';

  @Prop({
    attribute: 'reverse',
    reflect: true,
  })
  reverse: boolean;

  render() {
    return (
      <Host>
        <div class="ivy-timeline-dot"></div>
        <div class="ivy-timeline-line"></div>
        <div class="ivy-timeline-ctx">
          <div class="ivy-timeline-timestamp">{this.timestamp}</div>
          <div>
            <slot></slot>
          </div>
        </div>
      </Host>
    );
  }
}
