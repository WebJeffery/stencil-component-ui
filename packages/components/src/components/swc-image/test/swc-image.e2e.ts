import { newE2EPage } from '@stencil/core/testing';

describe('swc-image', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-image></swc-image>');

    const element = await page.find('swc-image');
    expect(element).toHaveClass('hydrated');
  });
});
