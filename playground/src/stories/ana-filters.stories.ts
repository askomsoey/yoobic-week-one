import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A/Molecules/Filters",
} as Meta;

const Template: Story<Components.AnaFilters> = ({ filters }) => {
  return html`<ana-filters .filters=${filters}></ana-filters>`;
};

export const Default: Story<Components.AnaFilters> = Template.bind({});
Default.args = {
  filters: [
    {
      id: 'hot',
      title: 'Hot',
      selected: true,
      icon: 'fire',
    },
    {
      id: 'new',
      title: 'New',
      selected: false,
      icon: 'certificate',
    },
    {
      id: 'top',
      title: 'Top',
      selected: false,
      icon: 'upload',
    },
  ],
};
