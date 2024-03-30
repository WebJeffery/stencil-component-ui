import { newSpecPage } from '@stencil/core/testing';
import { SwcIcon } from '../swc-icon';

describe('swc-icon', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcIcon],
      html: `<swc-icon></swc-icon>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-icon>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-icon>
    `);
  });
});
