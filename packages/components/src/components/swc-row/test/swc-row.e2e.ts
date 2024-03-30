import { newE2EPage } from '@stencil/core/testing';

describe('swc-row', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-row></swc-row>');

    const element = await page.find('swc-row');
    expect(element).toHaveClass('hydrated');
  });
});
