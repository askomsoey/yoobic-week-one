import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A Filters",
} as Meta;

const Template: Story<Components.AnaButton> = () => {
  return html`<ana-filters></ana-filters>`;
};

export const Default: Story<Components.AnaButton> = Template.bind({});
