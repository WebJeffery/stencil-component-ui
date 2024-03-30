import { newE2EPage } from '@stencil/core/testing';

describe('swc-timeline', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-timeline></swc-timeline>');

    const element = await page.find('swc-timeline');
    expect(element).toHaveClass('hydrated');
  });
});
