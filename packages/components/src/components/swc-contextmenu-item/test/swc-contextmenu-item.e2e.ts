import { newE2EPage } from '@stencil/core/testing';

describe('swc-contextmenu-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-contextmenu-item></swc-contextmenu-item>');

    const element = await page.find('swc-contextmenu-item');
    expect(element).toHaveClass('hydrated');
  });
});
