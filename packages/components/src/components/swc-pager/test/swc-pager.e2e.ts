import { newE2EPage } from '@stencil/core/testing';

describe('swc-pager', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-pager></swc-pager>');

    const element = await page.find('swc-pager');
    expect(element).toHaveClass('hydrated');
  });
});
