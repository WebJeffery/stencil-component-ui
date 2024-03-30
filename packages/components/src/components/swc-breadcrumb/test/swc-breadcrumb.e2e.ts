import { newE2EPage } from '@stencil/core/testing';

describe('swc-breadcrumb', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-breadcrumb></swc-breadcrumb>');

    const element = await page.find('swc-breadcrumb');
    expect(element).toHaveClass('hydrated');
  });
});
