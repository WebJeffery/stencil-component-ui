import { newSpecPage } from '@stencil/core/testing';
import { SwcImage } from '../swc-image';

describe('swc-image', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcImage],
      html: `<swc-image></swc-image>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-image>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-image>
    `);
  });
});
