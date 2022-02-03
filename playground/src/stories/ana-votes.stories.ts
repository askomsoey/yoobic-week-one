import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A Votes",
  argTypes: {
    identifier: {
      control: { type: 'text' },
    },
    variant: {
      options: ['arrows', 'thumbs', 'math'],
      control: { type: 'inline-radio' },
    },
    totalVotes: {
      control: { type: 'number' },
    },
  },
} as Meta;

const Template: Story<Components.AnaVotes> = ({ identifier = 'votes', variant = 'arrows', totalVotes = 0 }) => {
  return html`<ana-votes identifier=${identifier} variant=${variant} total-votes="${totalVotes}"></ana-votes>`;
};

export const Default: Story<Components.AnaVotes> = Template.bind({});
