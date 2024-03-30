import { newSpecPage } from '@stencil/core/testing';
import { SwcDivider } from '../swc-divider';

describe('swc-divider', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcDivider],
      html: `<swc-divider></swc-divider>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-divider>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-divider>
    `);
  });
});
