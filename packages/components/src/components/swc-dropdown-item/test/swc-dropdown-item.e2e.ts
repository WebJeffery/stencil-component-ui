import { newE2EPage } from '@stencil/core/testing';

describe('swc-dropdown-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-dropdown-item></swc-dropdown-item>');

    const element = await page.find('swc-dropdown-item');
    expect(element).toHaveClass('hydrated');
  });
});
