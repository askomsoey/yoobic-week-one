import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'ana-image',
  styleUrl: 'ana-image.scss',
  shadow: true,
  assetsDirs: ['assets/ana-image'],
})
export class AnaImage implements ComponentInterface {
  @Prop({ reflect: true }) src!: string;
  @Prop() alt!: string;
  @Prop() size?: 'large' | 'medium' | 'small' | 'xsmall' = 'medium';
  @Prop() shape?: 'round' | 'smooth' | 'sharp' = 'round';

  render() {
    return (
      <Host>
        <img src={this.src} alt={this.alt} class={`img ${this.size} ${this.shape}`} />
      </Host>
    );
  }
}
