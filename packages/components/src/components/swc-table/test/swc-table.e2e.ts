import { newE2EPage } from '@stencil/core/testing';

describe('swc-table', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-table></swc-table>');

    const element = await page.find('swc-table');
    expect(element).toHaveClass('hydrated');
  });
});
