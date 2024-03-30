import { newSpecPage } from '@stencil/core/testing';
import { SwcDrawer } from '../swc-drawer';

describe('swc-drawer', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcDrawer],
      html: `<swc-drawer></swc-drawer>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-drawer>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-drawer>
    `);
  });
});
