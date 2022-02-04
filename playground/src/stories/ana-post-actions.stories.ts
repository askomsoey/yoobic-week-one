import { Meta, Story } from '@storybook/web-components';
import { Components } from '@yoobic/design-system';
import { html } from 'lit-html';

export default {
  title: "A'n'A/Molecules/Post Actions",
} as Meta;

const Template: Story<Components.AnaPostActions> = ({ actions, moreActions }) => {
  return html`<ana-post-actions .actions=${actions} .moreActions=${moreActions}></ana-post-actions>`;
};

export const Default: Story<Components.AnaPostActions> = Template.bind({});
Default.args = {
  actions: [
    {
      id: 'commment',
      label: 'Comment',
      icon: 'comment-alt',
    },
    {
      id: 'award',
      label: 'Award',
      icon: 'gift',
    },
    {
      id: 'share',
      label: 'Share',
      icon: 'share',
    },
    {
      id: 'save',
      label: 'Save',
      icon: 'bookmark',
    },
  ],
  moreActions: [
    {
      id: 'hide',
      label: 'Hide',
      icon: 'eye-slash',
    },
    {
      id: 'report',
      label: 'Report',
      icon: 'flag',
    },
  ],
};
