import { newE2EPage } from '@stencil/core/testing';

describe('swc-card', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-card></swc-card>');

    const element = await page.find('swc-card');
    expect(element).toHaveClass('hydrated');
  });
});
