import { newE2EPage } from '@stencil/core/testing';

describe('swc-dropdown', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-dropdown></swc-dropdown>');

    const element = await page.find('swc-dropdown');
    expect(element).toHaveClass('hydrated');
  });
});
