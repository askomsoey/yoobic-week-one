import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as reactImg from '../assets/ana-image/react.png';

export default {
  title: "A'n'A/Organisms/Header",
  argTypes: {
    backgroundImg: {
      control: { type: 'text' },
    },
    logoSrc: {
      control: { type: 'text' },
    },
    mainTitle: {
      control: { type: 'text' },
    },
    subtitle: {
      control: { type: 'text' },
    },
  },
} as Meta;

const Template: Story<Components.AnaHeader> = ({
  backgroundImg = undefined,
  logoSrc = reactImg,
  mainTitle = '/r/Test Title Content',
  subtitle = 'r/Test Subtitle Content',
  tabs = [],
}) => {
  return html` <ana-header background-img=${backgroundImg} logo-src=${logoSrc} main-title=${mainTitle} subtitle=${subtitle} .tabs=${tabs}></ana-header> `;
};

export const Default: Story<Components.AnaHeader> = Template.bind({});
Default.args = {
  tabs: [
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
