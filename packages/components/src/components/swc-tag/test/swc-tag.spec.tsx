import { newSpecPage } from '@stencil/core/testing';
import { SwcTag } from '../swc-tag';

describe('swc-tag', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTag],
      html: `<swc-tag></swc-tag>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-tag>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-tag>
    `);
  });
});
