import { newSpecPage } from '@stencil/core/testing';
import { SwcButton } from '../swc-button';

describe('swc-button', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcButton],
      html: `<swc-button></swc-button>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-button>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-button>
    `);
  });
});
