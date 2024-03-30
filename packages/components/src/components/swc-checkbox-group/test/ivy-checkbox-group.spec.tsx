import { newSpecPage } from '@stencil/core/testing';
import { SwcCheckboxGroup } from '../swc-checkbox-group';

describe('swc-checkbox-group', () => {
  it('renders', async () => {
    const page = await newSpecPage({
      components: [SwcCheckboxGroup],
      html: `<swc-checkbox-group></swc-checkbox-group>`,
    });
    expect(page.root).toEqualHtml(`
      <swc-checkbox-group>
        <mock:shadow-root>
          <slot></slot>
        </mock:shadow-root>
      </swc-checkbox-group>
    `);
  });
});
