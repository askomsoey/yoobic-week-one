import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A Title",
} as Meta;

const Template: Story<Components.AnaTitle> = ({ size }) => {
  return html`<ana-title size=${size}>Test Title</ana-title>`;
};

export const Default: Story<Components.AnaTitle> = Template.bind({});
Default.args = {
  size: 'medium',
};
