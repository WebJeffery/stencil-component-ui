import { newSpecPage } from '@stencil/core/testing';
import { SwcSelect } from '../swc-select';

describe('swc-select', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcSelect],
      html: `<swc-select></swc-select>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-select>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-select>
    `);
  });
});
