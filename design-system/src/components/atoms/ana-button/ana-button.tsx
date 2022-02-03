import { Component, ComponentInterface, Event, EventEmitter, h, Host, Prop } from '@stencil/core';
import Helmet from '@stencil/helmet';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'ana-button',
  styleUrl: 'ana-button.scss',
  assetsDirs: ['assets'],
})
export class AnaButton implements ComponentInterface {
  @Prop() identifier?: Identifier = 'button';
  @Prop() type: 'primary' | 'secondary' | 'action' = 'primary';
  @Prop() selected? = false;
  @Prop() content?: string;
  @Prop() icon?: string;

  @Event({
    eventName: 'buttonClicked',
    bubbles: true,
    composed: true,
  })
  buttonClicked: EventEmitter<Identifier>;

  buttonClickedHandler() {
    this.buttonClicked.emit(this.identifier);
  }

  renderIcon() {
    // Also render a script tag including a FontAwesome script in head
    return [
      <Helmet>
        <script src="https://kit.fontawesome.com/783e54b461.js" crossorigin="anonymous"></script>
      </Helmet>,
      <i class={`fas fa-${this.icon} fa-lg`}></i>,
    ];
  }

  render() {
    return (
      <Host>
        <button class={`button ${this.type} ${this.selected ? 'selected' : ''}`} onClick={this.buttonClickedHandler.bind(this)}>
          {this.icon ? this.renderIcon() : ''}
          {this.content && this.content}
          <slot />
        </button>
      </Host>
    );
  }
}
