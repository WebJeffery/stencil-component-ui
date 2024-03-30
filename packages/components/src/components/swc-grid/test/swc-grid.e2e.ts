import { newE2EPage } from '@stencil/core/testing';

describe('swc-grid', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-grid></swc-grid>');

    const element = await page.find('swc-grid');
    expect(element).toHaveClass('hydrated');
  });
});
