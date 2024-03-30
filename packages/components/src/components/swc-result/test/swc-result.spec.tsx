import { newSpecPage } from '@stencil/core/testing';
import { SwcResult } from '../swc-result';

describe('swc-result', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcResult],
      html: `<swc-result></swc-result>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-result>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-result>
    `);
  });
});
