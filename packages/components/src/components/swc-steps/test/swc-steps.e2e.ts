import { newE2EPage } from '@stencil/core/testing';

describe('swc-steps', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-steps></swc-steps>');

    const element = await page.find('swc-steps');
    expect(element).toHaveClass('hydrated');
  });
});
