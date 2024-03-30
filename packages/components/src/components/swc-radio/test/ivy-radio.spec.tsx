import { newSpecPage } from '@stencil/core/testing';
import { SwcRadio } from '../swc-radio';

describe('swc-radio', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcRadio],
      html: `<swc-radio></swc-radio>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-radio>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-radio>
    `);
  });
});
