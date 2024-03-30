import { newE2EPage } from '@stencil/core/testing';

describe('swc-empty', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-empty></swc-empty>');

    const element = await page.find('swc-empty');
    expect(element).toHaveClass('hydrated');
  });
});
