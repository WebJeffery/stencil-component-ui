import { newSpecPage } from '@stencil/core/testing';
import { SwcLink } from '../swc-link';

describe('swc-link', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcLink],
      html: `<swc-link></swc-link>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-link>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-link>
    `);
  });
});
