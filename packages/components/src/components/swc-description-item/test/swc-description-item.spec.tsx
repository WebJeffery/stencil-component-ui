import { newSpecPage } from '@stencil/core/testing';
import { SwcDescriptionItem } from '../swc-description-item';

describe('swc-description-item', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcDescriptionItem],
      html: `<swc-description-item></swc-description-item>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-description-item>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-description-item>
    `);
  });
});
