import { newE2EPage } from '@stencil/core/testing';

describe('swc-message', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-message></swc-message>');

    const element = await page.find('swc-message');
    expect(element).toHaveClass('hydrated');
  });
});
