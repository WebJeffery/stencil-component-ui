import { newE2EPage } from '@stencil/core/testing';

describe('swc-checkbox', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-checkbox></swc-checkbox>');

    const element = await page.find('swc-checkbox');
    expect(element).toHaveClass('hydrated');
  });
});
