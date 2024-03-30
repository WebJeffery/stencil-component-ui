import { newE2EPage } from '@stencil/core/testing';

describe('swc-drawer', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-drawer></swc-drawer>');

    const element = await page.find('swc-drawer');
    expect(element).toHaveClass('hydrated');
  });
});
