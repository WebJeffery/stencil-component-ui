import { newE2EPage } from '@stencil/core/testing';

describe('swc-divider', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-divider></swc-divider>');

    const element = await page.find('swc-divider');
    expect(element).toHaveClass('hydrated');
  });
});
