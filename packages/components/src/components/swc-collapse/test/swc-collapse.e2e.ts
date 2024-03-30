import { newE2EPage } from '@stencil/core/testing';

describe('swc-collapse', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-collapse></swc-collapse>');

    const element = await page.find('swc-collapse');
    expect(element).toHaveClass('hydrated');
  });
});
