import { newE2EPage } from '@stencil/core/testing';

describe('swc-link', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-link></swc-link>');

    const element = await page.find('swc-link');
    expect(element).toHaveClass('hydrated');
  });
});
