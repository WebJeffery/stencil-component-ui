import { newSpecPage } from '@stencil/core/testing';
import { SwcSteps } from '../swc-steps';

describe('swc-steps', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcSteps],
      html: `<swc-steps></swc-steps>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-steps>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-steps>
    `);
  });
});
