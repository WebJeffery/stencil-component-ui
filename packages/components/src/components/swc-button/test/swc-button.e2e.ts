import { newE2EPage } from '@stencil/core/testing';

describe('swc-button', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-button></swc-button>');

    const element = await page.find('swc-button');
    expect(element).toHaveClass('hydrated');
  });
});
