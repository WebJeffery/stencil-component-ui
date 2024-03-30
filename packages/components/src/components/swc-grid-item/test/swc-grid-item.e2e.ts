import { newE2EPage } from '@stencil/core/testing';

describe('swc-grid-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-grid-item></swc-grid-item>');

    const element = await page.find('swc-grid-item');
    expect(element).toHaveClass('hydrated');
  });
});
