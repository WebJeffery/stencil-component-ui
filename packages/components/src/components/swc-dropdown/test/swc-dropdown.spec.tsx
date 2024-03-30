import { newSpecPage } from '@stencil/core/testing';
import { SwcDropdown } from '../swc-dropdown';

describe('swc-dropdown', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcDropdown],
      html: `<swc-dropdown></swc-dropdown>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-dropdown>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-dropdown>
    `);
  });
});
