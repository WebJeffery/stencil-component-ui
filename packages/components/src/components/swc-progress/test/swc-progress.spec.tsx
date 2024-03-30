import { newSpecPage } from '@stencil/core/testing';
import { SwcProgress } from '../swc-progress';

describe('swc-progress', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcProgress],
      html: `<swc-progress></swc-progress>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-progress>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-progress>
    `);
  });
});
