import { newSpecPage } from '@stencil/core/testing';
import { SwcSwitch } from '../swc-switch';

describe('swc-switch', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcSwitch],
      html: `<swc-switch></swc-switch>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-switch>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-switch>
    `);
  });
});
