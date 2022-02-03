import { Component, ComponentInterface, Event, EventEmitter, getAssetPath, h, Host, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'ana-button',
  styleUrl: 'ana-button.scss',
  shadow: true,
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
    return <img src={getAssetPath(`./assets/${this.icon}`)} />;
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
