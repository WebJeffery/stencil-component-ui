import { newE2EPage } from '@stencil/core/testing';

describe('swc-description-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-description-item></swc-description-item>');

    const element = await page.find('swc-description-item');
    expect(element).toHaveClass('hydrated');
  });
});
