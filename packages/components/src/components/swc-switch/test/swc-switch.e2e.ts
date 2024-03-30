import { newE2EPage } from '@stencil/core/testing';

describe('swc-switch', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-switch></swc-switch>');

    const element = await page.find('swc-switch');
    expect(element).toHaveClass('hydrated');
  });
});
