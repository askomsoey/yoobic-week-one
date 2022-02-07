import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as reactImg from '../assets/ana-image/react.png';
import { FILTERS } from '../mocks/filters';
import { POSTS } from '../mocks/posts';
import { TABS } from '../mocks/tabs';

export default {
  title: "A'n'A/Templates/Reddit",
} as Meta;

const Template: Story<Components.AnaReddit> = ({
  filters = FILTERS,
  headerTabs = TABS,
  posts = POSTS,
  headerImg = undefined,
  logoSrc = reactImg,
  mainTitle = '/r/Test Title',
  subtitle = 'r/Test Subtitle',
}) => {
  return html`
    <ana-reddit .filters=${filters} .headerTabs=${headerTabs} .posts=${posts} header-img=${headerImg} logo-src=${logoSrc} main-title=${mainTitle} subtitle=${subtitle}></ana-reddit>
  `;
};

export const Default: Story<Components.AnaReddit> = Template.bind({});
