import { newSpecPage } from '@stencil/core/testing';
import { SwcRow } from '../swc-row';

describe('swc-row', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcRow],
      html: `<swc-row></swc-row>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-row>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-row>
    `);
  });
});
