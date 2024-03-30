import { newSpecPage } from '@stencil/core/testing';
import { SwcCollapse } from '../swc-collapse';

describe('swc-collapse', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcCollapse],
      html: `<swc-collapse></swc-collapse>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-collapse>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-collapse>
    `);
  });
});
