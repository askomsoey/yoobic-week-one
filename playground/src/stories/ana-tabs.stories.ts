import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A/Molecules/Tabs",
  argTypes: {
    buttonType: {
      options: ['primary', 'secondary', 'action', 'tab'],
      control: {
        type: 'inline-radio',
      },
    },
  },
} as Meta;

const Template: Story<Components.AnaTabs> = ({ buttonType = 'secondary', tabs }) => {
  return html`<ana-tabs button-type=${buttonType} .tabs=${tabs}></ana-tabs>`;
};

export const Default: Story<Components.AnaTabs> = Template.bind({});
Default.args = {
  tabs: [
    {
      id: 'hot',
      title: 'Hot',
      selected: true,
    },
    {
      id: 'new',
      title: 'New',
      selected: false,
    },
    {
      id: 'top',
      title: 'Top',
      selected: false,
    },
  ],
};

export const WithIcons: Story<Components.AnaTabs> = Template.bind({});
WithIcons.args = {
  tabs: [
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

export const TransparentStyle: Story<Components.AnaTabs> = Template.bind({});
TransparentStyle.args = {
  buttonType: 'tab',
  tabs: [
    {
      id: 'posts',
      title: 'Posts',
      selected: true,
    },
    {
      id: 'wiki',
      title: 'Wiki',
      selected: false,
    },
    {
      id: 'rules',
      title: 'Rules',
      selected: false,
    },
  ],
};
