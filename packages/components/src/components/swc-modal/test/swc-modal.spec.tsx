import { newSpecPage } from '@stencil/core/testing';
import { SwcModal } from '../swc-modal';

describe('swc-modal', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcModal],
      html: `<swc-modal></swc-modal>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-modal>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-modal>
    `);
  });
});
