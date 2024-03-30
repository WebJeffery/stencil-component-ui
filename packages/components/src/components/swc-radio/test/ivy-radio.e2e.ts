import { newE2EPage } from '@stencil/core/testing';

describe('swc-radio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-radio></swc-radio>');

    const element = await page.find('swc-radio');
    expect(element).toHaveClass('hydrated');
  });
});
