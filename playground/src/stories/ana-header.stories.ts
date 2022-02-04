import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as reactImg from '../assets/ana-image/react.png';

export default {
  title: "A'n'A/Organisms/Header",
  argTypes: {
    headerBackgroundImg: {
      control: { type: 'text' },
    },
    pageLogoSrc: {
      control: { type: 'text' },
    },
    titleContent: {
      control: { type: 'text' },
    },
    subtitleContent: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story<Components.AnaHeader> = ({
  headerBackgroundImg = undefined,
  pageLogoSrc = reactImg,
  titleContent = '/r/Test Title Content',
  subtitleContent = 'r/Test Subtitle Content',
  tabsData = [],
}) => {
  return html`
    <ana-header
      header-background-img=${headerBackgroundImg}
      page-logo-src=${pageLogoSrc}
      title-content=${titleContent}
      subtitle-content=${subtitleContent}
      .tabsData=${tabsData}
    ></ana-header>
  `;
};

export const Default: Story<Components.AnaHeader> = Template.bind({});
Default.args = {
  tabsData: [
    {
      id: 'posts',
      title: 'Posts',
      selected: false,
    },
    {
      id: 'wiki',
      title: 'Wiki',
      selected: false,
    },
    {
      id: 'rules',
      title: 'Rules',
      selected: true,
    },
  ],
};
