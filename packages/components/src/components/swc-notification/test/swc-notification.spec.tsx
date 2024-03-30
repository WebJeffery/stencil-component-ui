import { newSpecPage } from '@stencil/core/testing';
import { SwcNotification } from '../swc-notification';

describe('swc-notification', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcNotification],
      html: `<swc-notification></swc-notification>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-notification>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-notification>
    `);
  });
});
