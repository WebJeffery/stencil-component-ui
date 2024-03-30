import { newSpecPage } from '@stencil/core/testing';
import { SwcBadge } from '../swc-badge';

describe('swc-badge', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcBadge],
      html: `<swc-badge></swc-badge>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-badge>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-badge>
    `);
  });
});
