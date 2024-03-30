import { newE2EPage } from '@stencil/core/testing';

describe('swc-aspect-ratio', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-aspect-ratio></swc-aspect-ratio>');

    const element = await page.find('swc-aspect-ratio');
    expect(element).toHaveClass('hydrated');
  });
});
