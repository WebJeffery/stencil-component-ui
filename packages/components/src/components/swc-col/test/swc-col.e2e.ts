import { newE2EPage } from '@stencil/core/testing';

describe('swc-col', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-col></swc-col>');

    const element = await page.find('swc-col');
    expect(element).toHaveClass('hydrated');
  });
});
