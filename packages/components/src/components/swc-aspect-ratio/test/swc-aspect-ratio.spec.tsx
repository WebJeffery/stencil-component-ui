import { newSpecPage } from '@stencil/core/testing';
import { SwcAspectRatio } from '../swc-aspect-ratio';

describe('swc-aspect-ratio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcAspectRatio],
      html: `<swc-aspect-ratio></swc-aspect-ratio>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-aspect-ratio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-aspect-ratio>
    `);
  });
});
