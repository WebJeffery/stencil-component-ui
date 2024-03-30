import { newE2EPage } from '@stencil/core/testing';

describe('swc-result', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-result></swc-result>');

    const element = await page.find('swc-result');
    expect(element).toHaveClass('hydrated');
  });
});
