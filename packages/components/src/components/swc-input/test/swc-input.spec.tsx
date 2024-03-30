import { newSpecPage } from '@stencil/core/testing';
import { SwcInput } from '../swc-input';

describe('swc-input', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcInput],
      html: `<swc-input></swc-input>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-input>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-input>
    `);
  });
});
