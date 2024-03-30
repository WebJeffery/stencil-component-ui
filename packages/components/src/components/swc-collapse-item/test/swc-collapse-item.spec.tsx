import { newSpecPage } from '@stencil/core/testing';
import { SwcCollapseItem } from '../swc-collapse-item';

describe('swc-collapse-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcCollapseItem],
      html: `<swc-collapse-item></swc-collapse-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-collapse-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-collapse-item>
    `);
  });
});
