import { newSpecPage } from '@stencil/core/testing';
import { SwcTip } from '../swc-tip';

describe('swc-tip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTip],
      html: `<swc-tip></swc-tip>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-tip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-tip>
    `);
  });
});
