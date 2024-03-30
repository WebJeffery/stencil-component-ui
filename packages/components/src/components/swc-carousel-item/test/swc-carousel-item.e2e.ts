import { newE2EPage } from '@stencil/core/testing';

describe('swc-carousel-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-carousel-item></swc-carousel-item>');

    const element = await page.find('swc-carousel-item');
    expect(element).toHaveClass('hydrated');
  });
});
