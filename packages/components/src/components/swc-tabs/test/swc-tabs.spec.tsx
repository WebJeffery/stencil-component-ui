import { newSpecPage } from '@stencil/core/testing';
import { SwcTabs } from '../swc-tabs';

describe('swc-tabs', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTabs],
      html: `<swc-tabs></swc-tabs>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-tabs>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-tabs>
    `);
  });
});
