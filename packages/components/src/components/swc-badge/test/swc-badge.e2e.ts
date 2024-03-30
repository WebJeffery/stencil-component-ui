import { newE2EPage } from '@stencil/core/testing';

describe('swc-badge', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-badge></swc-badge>');

    const element = await page.find('swc-badge');
    expect(element).toHaveClass('hydrated');
  });
});
