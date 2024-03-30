import { newE2EPage } from '@stencil/core/testing';

describe('swc-timeline-item', () => {
  it('renders', async () => {
    const page = await newE2EPage();
    await page.setContent('<swc-timeline-item></swc-timeline-item>');

    const element = await page.find('swc-timeline-item');
    expect(element).toHaveClass('hydrated');
  });
});
