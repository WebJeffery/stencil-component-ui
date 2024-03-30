import { newE2EPage } from '@stencil/core/testing';

describe('swc-input', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-input></swc-input>');

    const element = await page.find('swc-input');
    expect(element).toHaveClass('hydrated');
  });
});
