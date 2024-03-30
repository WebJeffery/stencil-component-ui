import { newE2EPage } from '@stencil/core/testing';

describe('swc-description', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-description></swc-description>');

    const element = await page.find('swc-description');
    expect(element).toHaveClass('hydrated');
  });
});
