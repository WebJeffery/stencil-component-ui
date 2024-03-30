import { newE2EPage } from '@stencil/core/testing';

describe('swc-tooltip', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-tooltip></swc-tooltip>');

    const element = await page.find('swc-tooltip');
    expect(element).toHaveClass('hydrated');
  });
});
