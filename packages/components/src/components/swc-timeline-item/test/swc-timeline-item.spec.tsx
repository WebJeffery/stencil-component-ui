import { newSpecPage } from '@stencil/core/testing';
import { SwcTimelineItem } from '../swc-timeline-item';

describe('swc-timeline-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTimelineItem],
      html: `<swc-timeline-item></swc-timeline-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-timeline-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-timeline-item>
    `);
  });
});
