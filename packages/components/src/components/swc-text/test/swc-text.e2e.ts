import { newE2EPage } from '@stencil/core/testing';

describe('swc-text', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-text></swc-text>');

    const element = await page.find('swc-text');
    expect(element).toHaveClass('hydrated');
  });
});
