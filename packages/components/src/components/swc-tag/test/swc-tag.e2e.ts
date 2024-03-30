import { newE2EPage } from '@stencil/core/testing';

describe('swc-tag', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-tag></swc-tag>');

    const element = await page.find('swc-tag');
    expect(element).toHaveClass('hydrated');
  });
});
