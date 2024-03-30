import { newSpecPage } from '@stencil/core/testing';
import { SwcTooltip } from '../swc-tooltip';

describe('swc-tooltip', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTooltip],
      html: `<swc-tooltip></swc-tooltip>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-tooltip>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-tooltip>
    `);
  });
});
