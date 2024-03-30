import { newE2EPage } from '@stencil/core/testing';

describe('swc-tip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-tip></swc-tip>');

    const element = await page.find('swc-tip');
    expect(element).toHaveClass('hydrated');
  });
});
