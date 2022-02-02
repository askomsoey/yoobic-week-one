import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ana-button',
  styleUrl: 'ana-button.scss',
  shadow: true,
})
export class AnaButton implements ComponentInterface {
  @Prop() type: 'primary' | 'secondary' | 'action' = 'primary';
  @Prop() active = false;

  render() {
    return (
      <Host>
        <button class={`button ${this.type} ${this.active ? 'active' : ''}`}>
          <slot />
        </button>
      </Host>
    );
  }
}
