import { newSpecPage } from '@stencil/core/testing';

import { AnaButton } from './ana-button';

describe('Atoms/Button', () => {
  let page;

  it('should render', async () => {
    page = await newSpecPage({
      components: [AnaButton],
      html: '<ana-button>Test</ana-button>',
    });
    expect(page.root).toEqualHtml(`
      <ana-button>
        <button class="button primary">Test</button>
      </ana-button>
    `);
  });

  it('should render with selected', async () => {
    page = await newSpecPage({
      components: [AnaButton],
      html: `<ana-button selected="true">Test</ana-button>`,
    });
    expect(page.root).toEqualHtml(`
      <ana-button selected="true">
        <button class="button primary selected">Test</button>
      </ana-button>
    `);
  });

  it('should fire a click event', async () => {
    page = await newSpecPage({
      components: [AnaButton],
      html: `<ana-button>Test</ana-button>`,
    });

    const onClick = jest.fn();
    page.root.addEventListener('click', onClick);
    await page.waitForChanges();
    page.root.click();
    expect(onClick).toHaveBeenCalled();
  });
});
