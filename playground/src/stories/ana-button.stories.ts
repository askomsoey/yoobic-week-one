import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A/Atoms/Button",
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'action', 'tab'],
      control: { type: 'inline-radio' },
    },
    content: {
      control: { type: 'text' },
    },
    selected: {
      type: 'boolean',
    },
    icon: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story<Components.AnaButton> = ({ identifier = 'button', type = 'primary', content = 'Join', selected = false, icon = '' }) => {
  return html` <ana-button identifier=${identifier} type=${type} content=${content} selected=${selected} icon=${icon}></ana-button>`;
};

export const Default: Story<Components.AnaButton> = Template.bind({});
Default.args = {
  type: 'primary',
};
export const Secondary: Story<Components.AnaButton> = Template.bind({});
Secondary.args = {
  type: 'secondary',
};
export const SecondarySelected: Story<Components.AnaButton> = Template.bind({});
SecondarySelected.args = {
  type: 'secondary',
  selected: true,
};

export const IconButton: Story<Components.AnaButton> = Template.bind({});
IconButton.args = {
  content: 'Hot',
  icon: 'fire',
};

export const Action: Story<Components.AnaButton> = Template.bind({});
Action.args = {
  type: 'action',
  content: 'Share',
  icon: 'share',
};

export const DefaultLongText: Story<Components.AnaButton> = Template.bind({});
DefaultLongText.args = {
  content: 'Create a new post',
};

export const Transparent: Story<Components.AnaButton> = Template.bind({});
Transparent.args = {
  type: 'tab',
  selected: false,
};
