import { newE2EPage } from '@stencil/core/testing';

describe('swc-breadcrumb-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-breadcrumb-item></swc-breadcrumb-item>');

    const element = await page.find('swc-breadcrumb-item');
    expect(element).toHaveClass('hydrated');
  });
});
