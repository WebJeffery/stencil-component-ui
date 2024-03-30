import { newSpecPage } from '@stencil/core/testing';
import { SwcPager } from '../swc-pager';

describe('swc-pager', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcPager],
      html: `<swc-pager></swc-pager>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-pager>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-pager>
    `);
  });
});
