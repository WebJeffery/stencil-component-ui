import { newSpecPage } from '@stencil/core/testing';
import { SwcOption } from '../swc-option';

describe('swc-option', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcOption],
      html: `<swc-option></swc-option>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-option>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-option>
    `);
  });
});
