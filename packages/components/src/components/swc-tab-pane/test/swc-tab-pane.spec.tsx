import { newSpecPage } from '@stencil/core/testing';
import { SwcTabPane } from '../swc-tab-pane';

describe('swc-tab-pane', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcTabPane],
      html: `<swc-tab-pane></swc-tab-pane>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-tab-pane>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-tab-pane>
    `);
  });
});
