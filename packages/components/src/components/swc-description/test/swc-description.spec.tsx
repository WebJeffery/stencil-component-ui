import { newSpecPage } from '@stencil/core/testing';
import { SwcDescription } from '../swc-description';

describe('swc-description', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcDescription],
      html: `<swc-description></swc-description>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-description>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-description>
    `);
  });
});
