import { newE2EPage } from '@stencil/core/testing';

describe('swc-dialog', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-dialog></swc-dialog>');

    const element = await page.find('swc-dialog');
    expect(element).toHaveClass('hydrated');
  });
});
