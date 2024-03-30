import { newE2EPage } from '@stencil/core/testing';

describe('swc-contextmenu', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-contextmenu></swc-contextmenu>');

    const element = await page.find('swc-contextmenu');
    expect(element).toHaveClass('hydrated');
  });
});
