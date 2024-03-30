import { newSpecPage } from '@stencil/core/testing';
import { SwcBreadcrumbItem } from '../swc-breadcrumb-item';

describe('swc-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcBreadcrumbItem],
      html: `<swc-breadcrumb-item></swc-breadcrumb-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-breadcrumb-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-breadcrumb-item>
    `);
  });
});
