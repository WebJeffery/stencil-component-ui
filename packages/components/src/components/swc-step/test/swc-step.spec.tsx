import { newSpecPage } from '@stencil/core/testing';
import { SwcStep } from '../swc-step';

describe('swc-step', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcStep],
      html: `<swc-step></swc-step>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-step>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-step>
    `);
  });
});
