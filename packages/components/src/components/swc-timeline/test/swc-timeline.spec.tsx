import { newSpecPage } from '@stencil/core/testing';
import { SwcTimeline } from '../swc-timeline';

describe('swc-timeline', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTimeline],
      html: `<swc-timeline></swc-timeline>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-timeline>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-timeline>
    `);
  });
});
