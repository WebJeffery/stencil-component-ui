import { newE2EPage } from '@stencil/core/testing';

describe('swc-step', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-step></swc-step>');

    const element = await page.find('swc-step');
    expect(element).toHaveClass('hydrated');
  });
});
