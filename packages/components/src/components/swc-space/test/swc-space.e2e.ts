import { newE2EPage } from '@stencil/core/testing';

describe('swc-space', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-space></swc-space>');

    const element = await page.find('swc-space');
    expect(element).toHaveClass('hydrated');
  });
});
