import { newE2EPage } from '@stencil/core/testing';

describe('swc-scrollbar', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-scrollbar></swc-scrollbar>');

    const element = await page.find('swc-scrollbar');
    expect(element).toHaveClass('hydrated');
  });
});
