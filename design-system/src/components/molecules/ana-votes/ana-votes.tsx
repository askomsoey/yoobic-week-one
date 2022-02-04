import { Component, ComponentInterface, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

export type Variant = 'thumbs' | 'arrows' | 'math';

@Component({
  tag: 'ana-votes',
  styleUrl: 'ana-votes.scss',
  shadow: true,
})
export class AnaVotes implements ComponentInterface {
  @Prop() identifier?: string = 'votes';
  @Prop() variant?: Variant = 'arrows';
  @Prop() totalVotes!: number;

  @Event({
    eventName: 'votesIncremented',
    bubbles: true,
    composed: true,
  })
  votesIncremented: EventEmitter<Identifier>;

  @Event({
    eventName: 'votesDecremented',
    bubbles: true,
    composed: true,
  })
  votesDecremented: EventEmitter<Identifier>;

  @Listen('buttonClicked')
  buttonClickedHandler(event: CustomEvent<Identifier>) {
    if (event.detail === 'incrementButton') {
      this.votesIncremented.emit(this.identifier);
    } else if (event.detail === 'decrementButton') {
      this.votesDecremented.emit(this.identifier);
    }
  }

  getVoteIcon(usage: 'increment' | 'decrement', variant: Variant) {
    let source;
    switch (variant) {
      case 'arrows':
        source = usage === 'increment' ? 'https://img.icons8.com/ios/20/d4d4d4/sort-up.png' : 'https://img.icons8.com/ios/20/d4d4d4/sort-down.png';
        break;
      case 'math':
        source = usage === 'increment' ? 'https://img.icons8.com/ios/20/d4d4d4/plus-math.png' : 'https://img.icons8.com/ios/20/d4d4d4/minus-math.png';
        break;
      case 'thumbs':
        source = usage === 'increment' ? 'https://img.icons8.com/material-outlined/20/d4d4d4/thumb-up.png' : 'https://img.icons8.com/material-outlined/20/d4d4d4/thumbs-down.png';
        break;
      default:
        return;
    }
    return <img src={source} alt={`${usage} votes button`} />;
  }

  getFormattedNumber() {
    let result = '';
    let total = this.totalVotes;

    if (total >= 1000000) {
      total = total / 1000000;
      result += total.toFixed(1) + 'M';
    } else if (total >= 1000) {
      total = total / 1000;
      result += total.toFixed(1) + 'K';
    } else {
      result += total;
    }

    return result;
  }

  render() {
    return (
      <Host>
        <ana-button identifier="incrementButton" type="secondary">
          {this.getVoteIcon('increment', this.variant)}
        </ana-button>
        <p class="total">{this.getFormattedNumber()}</p>
        <ana-button identifier="decrementButton" type="secondary">
          {this.getVoteIcon('decrement', this.variant)}
        </ana-button>
      </Host>
    );
  }
}
