import { newSpecPage } from '@stencil/core/testing';
import { SwcContextmenuItem } from '../swc-contextmenu-item';

describe('swc-contextmenu-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcContextmenuItem],
      html: `<swc-contextmenu-item></swc-contextmenu-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-contextmenu-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-contextmenu-item>
    `);
  });
});
