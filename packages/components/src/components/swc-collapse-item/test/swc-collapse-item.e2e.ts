import { newE2EPage } from '@stencil/core/testing';

describe('swc-collapse-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-collapse-item></swc-collapse-item>');

    const element = await page.find('swc-collapse-item');
    expect(element).toHaveClass('hydrated');
  });
});
