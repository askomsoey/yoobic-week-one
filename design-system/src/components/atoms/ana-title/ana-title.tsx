import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ana-title',
  styleUrl: 'ana-title.scss',
  shadow: true,
})
export class AnaTitle implements ComponentInterface {
  @Prop() content!: string;
  @Prop() size?: 'large' | 'medium' | 'small' = 'medium';
  @Prop() color? = '#222';
  @Prop({ reflect: true }) elevated = false;

  render() {
    return (
      <Host>
        <p class={`title ${this.size} ${this.elevated ? 'elevated' : ''}`} style={{ color: this.color }}>
          {this.content}
        </p>
      </Host>
    );
  }
}
