import { newE2EPage } from '@stencil/core/testing';

describe('swc-progress', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-progress></swc-progress>');

    const element = await page.find('swc-progress');
    expect(element).toHaveClass('hydrated');
  });
});
