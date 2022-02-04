import { Component, ComponentInterface, h, Host } from '@stencil/core';

@Component({
  tag: 'ana-card',
  styleUrl: 'ana-card.scss',
  assetsDirs: ['assets'],
  shadow: true,
})
export class AnaCard implements ComponentInterface {
  render() {
    return (
      <Host>
        <div class="left">
          <slot name="left" />
        </div>
        <div class="main-content">
          <div class="top">
            <slot name="top" />
          </div>
          <div class="main">
            <slot name="main" />
          </div>
          <div class="bottom">
            <slot name="bottom" />
          </div>
        </div>
        <div class="right">
          <slot name="right" />
        </div>
      </Host>
    );
  }
}
