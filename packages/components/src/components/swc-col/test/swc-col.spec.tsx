import { newSpecPage } from '@stencil/core/testing';
import { SwcCol } from '../swc-col';

describe('swc-col', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcCol],
      html: `<swc-col></swc-col>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-col>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-col>
    `);
  });
});
