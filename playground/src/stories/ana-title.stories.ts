import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A Title",
  argTypes: {
    size: {
      options: ['large', 'medium', 'small'],
      control: { type: 'inline-radio' },
    },
    content: {
      control: { type: 'text' },
    },
    color: {
      control: { type: 'color' },
    },
    elevated: {
      type: 'boolean',
    },
  },
} as Meta;

const Template: Story<Components.AnaTitle> = ({ content = 'Test Title', size = 'medium', color = '#000', elevated = false }) => {
  return html`<ana-title content=${content} size=${size} color=${color} elevated="${elevated}"></ana-title>`;
};

export const Default: Story<Components.AnaTitle> = Template.bind({});
Default.args = {
  size: 'medium',
};

export const LongText: Story<Components.AnaTitle> = Template.bind({});
LongText.args = {
  size: 'large',
  content: 'This is an example of a longer content text to see exactly how it behaves when getting a much longer input than expected',
};

export const Colored: Story<Components.AnaTitle> = Template.bind({});
Colored.args = {
  color: '#f2b',
};

export const Elevated: Story<Components.AnaTitle> = Template.bind({});
Elevated.args = {
  elevated: true,
};
