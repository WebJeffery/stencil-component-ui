import { newE2EPage } from '@stencil/core/testing';

describe('swc-tab-pane', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-tab-pane></swc-tab-pane>');

    const element = await page.find('swc-tab-pane');
    expect(element).toHaveClass('hydrated');
  });
});
