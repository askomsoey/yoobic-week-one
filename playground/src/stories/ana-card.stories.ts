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

export const PostCardWithImage: Story<Components.AnaCard> = Template.bind({});
PostCardWithImage.args = {
  type: 'post',
  post: {
    votes: 97,
    title: 'Post title',
    content: `Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus lobortis aliquet mollis. Praesent dui elit, sagittis at lectus sit amet, interdum feugiat erat. Curabitur egestas accumsan ex, in convallis tellus fermentum et. Pellentesque tellus lorem, auctor eget dapibus vitae, laoreet et dolor. Fusce laoreet egestas eros in fringilla. Nulla semper aliquet dapibus. Donec dapibus erat suscipit, consequat ex quis, mollis sapien. Aliquam erat volutpat. Curabitur bibendum sem a ipsum interdum porta. Sed condimentum est non dui imperdiet lacinia a eu lectus. Aliquam luctus mauris sed leo bibendum, non molestie ante mollis. Pellentesque tellus metus, pretium et turpis eu, molestie consectetur sem. Suspendisse potenti. Sed faucibus nunc arcu, at pharetra ligula maximus id.`,
    image: 'https://i.pinimg.com/originals/8c/ab/4e/8cab4e46f19b1c4ae0ed8ff6c5115e7d.jpg',
    comments: 12,
    author: 'naytars',
    date: new Date(),
  },
};

export const Filters: Story<Components.AnaCard> = Template.bind({});
Filters.args = {
  type: 'filters',
  tabs: FILTERS,
};
