import { newSpecPage } from '@stencil/core/testing';
import { SwcDetails } from '../swc-details';

describe('swc-details', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcDetails],
      html: `<swc-details></swc-details>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-details>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-details>
    `);
  });
});
