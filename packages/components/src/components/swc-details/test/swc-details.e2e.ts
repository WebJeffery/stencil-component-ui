import { newE2EPage } from '@stencil/core/testing';

describe('swc-details', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-details></swc-details>');

    const element = await page.find('swc-details');
    expect(element).toHaveClass('hydrated');
  });
});
