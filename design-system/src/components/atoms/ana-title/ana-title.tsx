import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ana-title',
  styleUrl: 'ana-title.scss',
  shadow: true,
})
export class AnaTitle implements ComponentInterface {
  @Prop() size: 'large' | 'medium' | 'small' = 'medium';

  render() {
    return (
      <Host>
        <div class={`title ${this.size}`}>
          <slot />
        </div>
      </Host>
    );
  }
}
