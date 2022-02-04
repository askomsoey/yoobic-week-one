import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A/Atoms/Dropdown",
  argTypes: {
    type: {
      options: ['primary', 'secondary', 'action'],
      control: { type: 'inline-radio' },
    },
    shape: {
      options: ['round', 'smooth', 'sharp'],
      control: { type: 'inline-radio' },
    },
    elevated: {
      type: 'boolean',
    },
  },
} as Meta;

const optionStyle = 'margin: 2px 0; color: black;';

const Template: Story<Components.AnaDropdown> = ({ type = 'primary', shape = 'smooth', elevated = false }) => {
  return html`
    <ana-dropdown type=${type} shape=${shape} elevated="${elevated}">
      <p slot="button" style="margin: 0;">Test</p>
      <div slot="menu">
        <p style="${optionStyle}">Option 1</p>
        <p style="${optionStyle}">Option 2</p>
        <p style="${optionStyle}">Option 3</p>
      </div>
    </ana-dropdown>
  `;
};

export const Default: Story<Components.AnaDropdown> = Template.bind({});
Default.args = {};
