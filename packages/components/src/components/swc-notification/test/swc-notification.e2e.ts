import { newE2EPage } from '@stencil/core/testing';

describe('swc-notification', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-notification></swc-notification>');

    const element = await page.find('swc-notification');
    expect(element).toHaveClass('hydrated');
  });
});
