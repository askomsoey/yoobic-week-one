import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ana-header',
  styleUrl: 'ana-header.scss',
  shadow: true,
})
export class AnaHeader implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="header-img-container"></div>
        <div class="control-panel"></div>
      </Host>
    );
  }
}
