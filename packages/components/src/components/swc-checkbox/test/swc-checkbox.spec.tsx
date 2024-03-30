import { newSpecPage } from '@stencil/core/testing';
import { SwcCheckbox } from '../swc-checkbox';

describe('swc-checkbox', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcCheckbox],
      html: `<swc-checkbox></swc-checkbox>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-checkbox>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-checkbox>
    `);
  });
});
