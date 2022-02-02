import { Component, ComponentInterface, getAssetPath, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ana-button',
  styleUrl: 'ana-button.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class AnaButton implements ComponentInterface {
  @Prop() type: 'primary' | 'secondary' | 'action' = 'primary';
  @Prop() selected = false;
  @Prop() content: string;
  @Prop() icon: string;

  renderIcon() {
    return <img src={getAssetPath(`./assets/${this.icon}`)} />;
  }

  render() {
    return (
      <Host>
        <button class={`button ${this.type} ${this.selected ? 'selected' : ''}`}>
          {this.icon ? this.renderIcon() : ''}
          {this.content}
        </button>
      </Host>
    );
  }
}
