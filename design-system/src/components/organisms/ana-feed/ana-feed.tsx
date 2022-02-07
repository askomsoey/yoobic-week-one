import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { CardStyle } from '../../shared/card-style';
import { CardType } from '../../shared/card-type';
import { Post } from '../../shared/post';
import { Tab } from '../../shared/tab';

@Component({
  tag: 'ana-feed',
  styleUrl: 'ana-feed.scss',
  shadow: false,
})
export class AnaFeed implements ComponentInterface {
  @Prop() posts?: Post[] = [];
  @Prop() filters!: Tab[];

  getPosts() {
    return this.posts.map((post) => <ana-card type={CardType.POST} post={post} cardStyle={CardStyle.CARD}></ana-card>);
  }

  render() {
    return (
      <Host class="feed-container">
        <div class="feed">
          <ana-card type={CardType.CREATE}></ana-card>
          <ana-card type={CardType.FILTERS} tabs={this.filters}></ana-card>
          {this.getPosts()}
        </div>
      </Host>
    );
  }
}
