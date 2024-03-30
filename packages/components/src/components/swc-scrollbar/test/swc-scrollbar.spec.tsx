import { newSpecPage } from '@stencil/core/testing';
import { SwcScrollbar } from '../swc-scrollbar';

describe('swc-scrollbar', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcScrollbar],
      html: `<swc-scrollbar></swc-scrollbar>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-scrollbar>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-scrollbar>
    `);
  });
});
