import { newSpecPage } from '@stencil/core/testing';
import { SwcRadioGroup } from '../swc-radio-group';

describe('swc-radio-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcRadioGroup],
      html: `<swc-radio-group></swc-radio-group>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-radio-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-radio-group>
    `);
  });
});
