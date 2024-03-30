import { newSpecPage } from '@stencil/core/testing';
import { SwcBreadcrumb } from '../swc-breadcrumb';

describe('swc-breadcrumb', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcBreadcrumb],
      html: `<swc-breadcrumb></swc-breadcrumb>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-breadcrumb>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-breadcrumb>
    `);
  });
});
