import { newSpecPage } from '@stencil/core/testing';
import { SwcEmpty } from '../swc-empty';

describe('swc-empty', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcEmpty],
      html: `<swc-empty></swc-empty>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-empty>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-empty>
    `);
  });
});
