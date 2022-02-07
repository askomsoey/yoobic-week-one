import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import { FILTERS } from '../mocks/filters';
import { POSTS } from '../mocks/posts';

export default {
  title: "A'n'A/Organisms/Feed",
} as Meta;

const Template: Story<Components.AnaFeed> = ({ posts = [], filters = FILTERS }) => {
  return html` <ana-feed .posts=${posts} .filters=${filters}></ana-feed> `;
};

export const Default: Story<Components.AnaFeed> = Template.bind({});
Default.args = {
  posts: POSTS,
};
