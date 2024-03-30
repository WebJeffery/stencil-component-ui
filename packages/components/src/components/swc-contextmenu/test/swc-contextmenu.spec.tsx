import { newSpecPage } from '@stencil/core/testing';
import { SwcContextmenu } from '../swc-contextmenu';

describe('swc-contextmenu', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcContextmenu],
      html: `<swc-contextmenu></swc-contextmenu>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-contextmenu>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-contextmenu>
    `);
  });
});
