import { newSpecPage } from '@stencil/core/testing';
import { SwcGrid } from '../swc-grid';

describe('swc-grid', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcGrid],
      html: `<swc-grid></swc-grid>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-grid>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-grid>
    `);
  });
});
