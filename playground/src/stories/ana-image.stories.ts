import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

import * as classicImg from '../assets/ana-image/classic.png';
import * as heroImg from '../assets/ana-image/hero.png';
import * as maskedImg from '../assets/ana-image/masked.png';
import * as reactImg from '../assets/ana-image/react.png';
import * as thumbsUpImg from '../assets/ana-image/thumbs_up.png';

export default {
  title: "A'n'A Image",
  argTypes: {
    useExternal: {
      type: 'boolean',
    },
    src: {
      control: { type: 'text' },
    },
    image: {
      options: ['classic', 'hero', 'masked', 'react', 'thumbs_up'],
      control: { type: 'select' },
    },
    alt: {
      control: { type: 'text' },
    },
    size: {
      options: ['large', 'medium', 'small', 'xsmall'],
      control: { type: 'inline-radio' },
    },
    shape: {
      options: ['round', 'smooth', 'sharp'],
      control: { type: 'inline-radio' },
    },
  },
} as Meta;

const Template: Story<Components.AnaImage> = ({ src = undefined, alt = 'Test alt', size = 'medium', shape = 'round' }) => {
  return html` <ana-image alt=${alt} src=${src} size=${size} shape=${shape}></ana-image>`;
};

export const Default: Story<Components.AnaImage> = Template.bind({});
Default.args = {
  src: classicImg,
  alt: 'Test alt',
  size: 'medium',
  shape: 'round',
};

export const WideImage: Story<Components.AnaImage> = Template.bind({});
WideImage.args = {
  src: 'https://via.placeholder.com/300x150',
  alt: 'placeholder',
  size: 'medium',
  shape: 'smooth',
};

export const TallImage: Story<Components.AnaImage> = Template.bind({});
TallImage.args = {
  src: 'https://via.placeholder.com/150x300',
  alt: 'placeholder',
  size: 'medium',
  shape: 'smooth',
};

export const Smooth: Story<Components.AnaImage> = Template.bind({});
Smooth.args = {
  src: heroImg,
  alt: 'Test alt',
  size: 'medium',
  shape: 'smooth',
};

export const Sharp: Story<Components.AnaImage> = Template.bind({});
Sharp.args = {
  src: maskedImg,
  alt: 'Test alt',
  size: 'medium',
  shape: 'sharp',
};

export const Large: Story<Components.AnaImage> = Template.bind({});
Large.args = {
  src: reactImg,
  alt: 'Test alt',
  size: 'large',
  shape: 'round',
};

export const XSmall: Story<Components.AnaImage> = Template.bind({});
XSmall.args = {
  src: thumbsUpImg,
  alt: 'Test alt',
  size: 'xsmall',
  shape: 'round',
};
