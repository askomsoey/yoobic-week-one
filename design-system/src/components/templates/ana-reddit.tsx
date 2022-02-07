import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Post } from '../shared/post';
import { Tab } from '../shared/tab';

@Component({
  tag: 'ana-reddit',
  styleUrl: 'ana-reddit.scss',
  shadow: false,
})
export class AnaReddit implements ComponentInterface {
  @Prop() mainTitle = '/r/Test Title';
  @Prop() subtitle = 'r/Test Subtitle';
  @Prop() logoSrc!: string;
  @Prop() headerTabs: Tab[] = [];
  @Prop() headerImg?: string;

  @Prop() posts: Post[] = [];
  @Prop() filters: Tab[] = [];

  render() {
    return (
      <Host>
        <div class="reddit-container">
          <ana-header logoSrc={this.logoSrc} mainTitle={this.mainTitle} subtitle={this.subtitle} tabs={this.headerTabs} backgroundImg={this.headerImg}></ana-header>
          <ana-feed posts={this.posts} filters={this.filters}></ana-feed>
        </div>
      </Host>
    );
  }
}
