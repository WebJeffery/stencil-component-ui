import { newE2EPage } from '@stencil/core/testing';

describe('swc-option', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-option></swc-option>');

    const element = await page.find('swc-option');
    expect(element).toHaveClass('hydrated');
  });
});
