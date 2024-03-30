import { newE2EPage } from '@stencil/core/testing';

describe('swc-modal', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-modal></swc-modal>');

    const element = await page.find('swc-modal');
    expect(element).toHaveClass('hydrated');
  });
});
