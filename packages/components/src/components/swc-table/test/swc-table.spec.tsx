import { newSpecPage } from '@stencil/core/testing';
import { SwcTable } from '../swc-table';

describe('swc-table', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTable],
      html: `<swc-table></swc-table>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-table>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-table>
    `);
  });
});
