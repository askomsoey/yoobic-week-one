import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { AnaButton } from '../../atoms/ana-button/ana-button';
import { Tab } from '../../shared/tab';
import { AnaTabs } from './ana-tabs';

const tabsMock: Tab[] = [
  {
    id: 'test1',
    title: 'Test 1',
    selected: false,
  },
  {
    id: 'test2',
    title: 'Test 2',
    selected: false,
  },
  {
    id: 'test3',
    title: 'Test 3',
    selected: true,
  },
];

describe('Molecules/Tabs', () => {
  let page;
  beforeEach(async () => {
    page = await newSpecPage({
      components: [AnaTabs, AnaButton],
      template: () => <ana-tabs tabs={tabsMock} buttonType="tab"></ana-tabs>,
    });
  });

  it('should render with provided tabs of type tab', () => {
    expect(page.root).toEqualHtml(`
      <ana-tabs>
        <div class="container">
          <ana-button>
            <button class="button tab">Test 1</button>
          </ana-button>
          <ana-button>
            <button class="button tab">Test 2</button>
          </ana-button>
          <ana-button>
            <button class="button selected tab">Test 3</button>
          </ana-button>
        </div>
      </ana-tabs>
    `);
  });

  it('should render with the third option selected', () => {
    const selected = page.root.querySelector('button.selected');
    expect(selected.innerHTML).toContain('Test 3');
  });

  it('should change the selected tab when other one is clicked', async () => {
    const optionTwo = page.root.querySelectorAll('button.button')[1];
    optionTwo.click();
    await page.waitForChanges();
    const selected = page.root.querySelector('button.selected');
    expect(selected.innerHTML).toContain('Test 2');
  });
});
