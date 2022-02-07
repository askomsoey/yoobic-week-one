import { Component, ComponentInterface, Event, EventEmitter, h, Host, Listen, Prop, State } from '@stencil/core';

import { CardStyle } from '../../shared/card-style';
import { CardType } from '../../shared/card-type';
import { Post } from '../../shared/post';
import { Tab } from '../../shared/tab';

@Component({
  tag: 'ana-card',
  styleUrl: 'ana-card.scss',
  assetsDirs: ['assets'],
})
export class AnaCard implements ComponentInterface {
  @Prop() type?: CardType = CardType.POST;
  @Prop() cardStyle?: CardStyle = CardStyle.CARD;
  @Prop() post?: Post;
  @Prop() tabs?: Tab[];

  actions = [
    {
      id: 'comment',
      label: 'Comments',
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
  ];

  @Event({
    eventName: 'cardStyleChange',
    bubbles: true,
    composed: true,
  })
  cardStyleChange: EventEmitter<CardStyle>;

  @Event({
    eventName: 'postVote',
    bubbles: true,
    composed: true,
  })
  postVote: EventEmitter<{ post: Post; score: number }>;

  componentWillRender() {
    if (this.post) {
      this.actions.find((a) => a.id === 'comment').label = `${this.post.comments} Comments`;
    }
  }

  @Listen('votesIncremented')
  votesIncremented() {
    this.addPostVote(1);
  }

  @Listen('votesDecremented')
  votesDecremented() {
    this.addPostVote(-1);
  }

  @Listen('buttonClicked')
  selectCardStyle(event: CustomEvent<CardStyle>) {
    if (Object.values(CardStyle).includes(event.detail)) {
      this.cardStyleChange.emit(event.detail);
    }
  }

  addPostVote(score: number) {
    this.postVote.emit({ post: this.post, score: score });
  }

  getActionButtons() {
    switch (this.cardStyle as CardStyle) {
      case CardStyle.CARD:
        return this.actions.slice(0, 4);
      case CardStyle.CLASSIC:
        return this.actions;
      case CardStyle.COMPACT:
        return this.actions.slice(0, 1);
    }
  }

  getMoreActionButtons() {
    switch (this.cardStyle as CardStyle) {
      case CardStyle.CARD:
        return this.actions.slice(4, 6);
      case CardStyle.CLASSIC:
        return [];
      case CardStyle.COMPACT:
        return this.actions.slice(1, 6);
    }
  }

  formatDate() {
    const seconds = Math.floor((new Date().getTime() - this.post.date.getTime()) / 1000);
    let interval = seconds / 31536000;
    if (interval > 1) {
      return Math.floor(interval) + ' years';
    }
    interval = seconds / 2592000;
    if (interval > 1) {
      return Math.floor(interval) + ' months';
    }
    interval = seconds / 86400;
    if (interval > 1) {
      return Math.floor(interval) + ' days';
    }
    interval = seconds / 3600;
    if (interval > 1) {
      return Math.floor(interval) + ' hours';
    }
    interval = seconds / 60;
    if (interval > 1) {
      return Math.floor(interval) + ' minutes';
    }
    return Math.floor(seconds) + ' seconds';
  }

  renderImage() {
    if (this.post.image || (!this.post.image && this.cardStyle !== CardStyle.CARD)) {
      return (
        <ana-image
          alt="post image"
          src={this.post.image || 'https://via.placeholder.com/300x300'}
          size={this.cardStyle === CardStyle.CARD ? 'large' : this.cardStyle === CardStyle.CLASSIC ? 'medium' : 'small'}
          shape="sharp"
        ></ana-image>
      );
    }
  }

  render() {
    if (this.type === CardType.POST) {
      return (
        <Host>
          <div class={`card hoverable ${this.cardStyle}`}>
            <div class="left">
              <ana-votes totalVotes={this.post.votes}></ana-votes>
            </div>
            <div class="main-content">
              <div class="top">
                <ana-title content={`Posted by u/${this.post.author} ${this.formatDate()} ago`} color="#6e6f70" size="xsmall"></ana-title>
              </div>
              <div class="main">
                <ana-title content={this.post.title} color="#d7dadc"></ana-title>
                <div class="content">
                  {this.renderImage()}
                  <p class="text-content">{this.post.content}</p>
                </div>
              </div>
              <div class="bottom">
                <ana-post-actions actions={this.getActionButtons()} moreActions={this.getMoreActionButtons()}></ana-post-actions>
              </div>
            </div>
            <div class="right"></div>
          </div>
        </Host>
      );
    } else if (this.type === CardType.FILTERS) {
      return (
        <Host>
          <div class="card filters">
            <ana-tabs buttonType="secondary" tabs={this.tabs}></ana-tabs>
            <ana-dropdown type="secondary">
              <i slot="button" class="fas fa-th-large"></i>
              <div slot="menu">
                {Object.values(CardStyle).map((cs) => (
                  <ana-button identifier={cs} type="action" content={cs[0].toUpperCase() + cs.slice(1)} icon="th-large"></ana-button>
                ))}
              </div>
            </ana-dropdown>
          </div>
        </Host>
      );
    }
  }
}
