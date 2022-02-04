import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A/Atoms/Card",
} as Meta;

const Template: Story<Components.AnaCard> = () => {
  return html`
    <ana-card>
      <div slot="left">left</div>
      <div slot="top">top</div>
      <div slot="main">main</div>
      <div slot="bottom">bottom</div>
      <div slot="right">right</div>
    </ana-card>
  `;
};

export const Default: Story<Components.AnaCard> = Template.bind({});
Default.args = {};
