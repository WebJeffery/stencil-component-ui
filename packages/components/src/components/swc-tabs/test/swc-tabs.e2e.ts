import { newE2EPage } from '@stencil/core/testing';

describe('swc-tabs', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-tabs></swc-tabs>');

    const element = await page.find('swc-tabs');
    expect(element).toHaveClass('hydrated');
  });
});
