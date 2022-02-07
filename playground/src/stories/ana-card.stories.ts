import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import { FILTERS } from '../mocks/filters';
import { POSTS } from '../mocks/posts';

export default {
  title: "A'n'A/Organisms/Card",
  argTypes: {
    type: {
      options: ['post', 'filters', 'create'],
      control: { type: 'inline-radio' },
    },
    cardStyle: {
      options: ['card', 'classic', 'compact'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.AnaCard> = ({ type, post, tabs, cardStyle = 'card' }) => {
  return html` <ana-card type=${type} .post=${post} .tabs=${tabs} card-style=${cardStyle}></ana-card> `;
};

export const PostCard: Story<Components.AnaCard> = Template.bind({});
PostCard.args = {
  type: 'post',
  post: POSTS[0],
};

export const Filters: Story<Components.AnaCard> = Template.bind({});
Filters.args = {
  type: 'filters',
  tabs: FILTERS,
};
