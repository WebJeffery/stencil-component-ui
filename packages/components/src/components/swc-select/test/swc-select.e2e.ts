import { newE2EPage } from '@stencil/core/testing';

describe('swc-select', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-select></swc-select>');

    const element = await page.find('swc-select');
    expect(element).toHaveClass('hydrated');
  });
});
