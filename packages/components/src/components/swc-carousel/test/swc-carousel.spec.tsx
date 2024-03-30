import { newSpecPage } from '@stencil/core/testing';
import { SwcCarousel } from '../swc-carousel';

describe('swc-carousel', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcCarousel],
      html: `<swc-carousel></swc-carousel>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-carousel>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-carousel>
    `);
  });
});
