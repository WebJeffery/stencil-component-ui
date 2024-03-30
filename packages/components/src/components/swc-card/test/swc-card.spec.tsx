import { newSpecPage } from '@stencil/core/testing';
import { SwcCard } from '../swc-card';

describe('swc-card', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcCard],
      html: `<swc-card></swc-card>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-card>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-card>
    `);
  });
});
