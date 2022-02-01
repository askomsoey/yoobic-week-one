import { h } from '@stencil/core';
import { newSpecPage } from '@stencil/core/testing';

import { MyComponent } from './my-component';

describe('my component', () => {
  const getSpecPage = async (props: Omit<MyComponent, 'render'> = {}) =>
    await newSpecPage({
      components: [MyComponent],
      template: () => <my-component {...props} />,
    });

  it('should display the full name if passed', async () => {
    const page = await getSpecPage({ first: 'John', last: 'Doe' });

    expect(page.root).toMatchSnapshot();
  });
});
