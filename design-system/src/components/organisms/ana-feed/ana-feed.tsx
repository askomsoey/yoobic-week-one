import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Post } from '../../shared/post';

@Component({
  tag: 'ana-feed',
  styleUrl: 'ana-feed.scss',
  shadow: true,
})
export class AnaFeed implements ComponentInterface {
  @Prop() posts?: Post[] = [];

  render() {
    return (
      <Host>
        <p>FEED</p>
      </Host>
    );
  }
}
