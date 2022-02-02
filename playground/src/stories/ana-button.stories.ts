import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A Button",
} as Meta;

const Template: Story<Components.AnaButton> = ({ type }) => {
  return html`<ana-button type=${type}>Join</ana-button>`;
};

export const Default: Story<Components.AnaButton> = Template.bind({});
Default.args = {
  type: 'primary',
  active: false,
};
