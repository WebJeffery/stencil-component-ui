import { newSpecPage } from '@stencil/core/testing';
import { SwcGridItem } from '../swc-grid-item';

describe('swc-grid-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcGridItem],
      html: `<swc-grid-item></swc-grid-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-grid-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-grid-item>
    `);
  });
});
