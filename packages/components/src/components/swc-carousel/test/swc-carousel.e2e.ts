import { newE2EPage } from '@stencil/core/testing';

describe('swc-carousel', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-carousel></swc-carousel>');

    const element = await page.find('swc-carousel');
    expect(element).toHaveClass('hydrated');
  });
});
