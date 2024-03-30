import { newSpecPage } from '@stencil/core/testing';
import { SwcSpace } from '../swc-space';

describe('swc-space', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcSpace],
      html: `<swc-space></swc-space>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-space>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-space>
    `);
  });
});
