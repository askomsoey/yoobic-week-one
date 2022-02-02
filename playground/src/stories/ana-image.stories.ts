import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A Image",
  argTypes: {
    src: {
      control: { type: 'text' },
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

const Template: Story<Components.AnaImage> = ({ src = 'https://via.placeholder.com/100x100', alt = 'Test alt', size = 'medium', shape = 'round' }) => {
  return html`<ana-image src=${src} alt=${alt} size=${size} shape=${shape}></ana-image>`;
};

export const Default: Story<Components.AnaImage> = Template.bind({});
Default.args = {
  src: 'https://via.placeholder.com/150x150',
  alt: 'Test alt',
  size: 'medium',
  shape: 'round',
};

export const TallImage: Story<Components.AnaImage> = Template.bind({});
TallImage.args = {
  src: 'https://via.placeholder.com/150x300',
};

export const WideImage: Story<Components.AnaImage> = Template.bind({});
WideImage.args = {
  src: 'https://via.placeholder.com/300x150',
};
