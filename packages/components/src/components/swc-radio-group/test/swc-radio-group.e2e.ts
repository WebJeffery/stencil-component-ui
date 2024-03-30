import { newE2EPage } from '@stencil/core/testing';

describe('swc-radio-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-radio-group></swc-radio-group>');

    const element = await page.find('swc-radio-group');
    expect(element).toHaveClass('hydrated');
  });
});
