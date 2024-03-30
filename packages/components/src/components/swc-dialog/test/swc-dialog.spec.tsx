import { newSpecPage } from '@stencil/core/testing';
import { SwcDialog } from '../swc-dialog';

describe('swc-dialog', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcDialog],
      html: `<swc-dialog></swc-dialog>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-dialog>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-dialog>
    `);
  });
});
