import { newSpecPage } from '@stencil/core/testing';
import { SwcLoading } from '../swc-loading';

describe('swc-loading', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcLoading],
      html: `<swc-loading></swc-loading>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-loading>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-loading>
    `);
  });
});
