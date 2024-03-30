import { newSpecPage } from '@stencil/core/testing';
import { SwcText } from '../swc-text';

describe('swc-text', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcText],
      html: `<swc-text></swc-text>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-text>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-text>
    `);
  });
});
