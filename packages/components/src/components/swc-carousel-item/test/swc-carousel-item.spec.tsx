import { newSpecPage } from '@stencil/core/testing';
import { SwcCarouselItem } from '../swc-carousel-item';

describe('swc-carousel-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcCarouselItem],
      html: `<swc-carousel-item></swc-carousel-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-carousel-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-carousel-item>
    `);
  });
});
