import { newSpecPage } from '@stencil/core/testing';
import { SwcDropdownItem } from '../swc-dropdown-item';

describe('swc-dropdown-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcDropdownItem],
      html: `<swc-dropdown-item></swc-dropdown-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-dropdown-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-dropdown-item>
    `);
  });
});
