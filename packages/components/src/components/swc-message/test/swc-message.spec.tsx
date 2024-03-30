import { newSpecPage } from '@stencil/core/testing';
import { SwcMessage } from '../swc-message';

describe('swc-message', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcMessage],
      html: `<swc-message></swc-message>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-message>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-message>
    `);
  });
});
