import { newE2EPage } from '@stencil/core/testing';

describe('swc-checkbox-group', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-checkbox-group></swc-checkbox-group>');

    const element = await page.find('swc-checkbox-group');
    expect(element).toHaveClass('hydrated');
  });
});
