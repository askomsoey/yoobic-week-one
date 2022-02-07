import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A/Organisms/Feed",
} as Meta;

const Template: Story<Components.AnaFeed> = ({ posts = [] }) => {
  return html` <ana-feed .posts=${posts}></ana-feed> `;
};

export const Default: Story<Components.AnaFeed> = Template.bind({});
