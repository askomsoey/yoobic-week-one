import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Tab } from '../../shared/tab';

@Component({
  tag: 'ana-header',
  styleUrl: 'ana-header.scss',
  shadow: true,
})
export class AnaHeader implements ComponentInterface {
  @Prop() backgroundImg?: string;
  @Prop() logoSrc!: string;
  @Prop() mainTitle!: string;
  @Prop() subtitle?: string;
  @Prop() tabs: Tab[] = [];

  render() {
    return (
      <Host>
        <div class="header-img-container">{this.backgroundImg && <img src={this.backgroundImg} alt="header" />}</div>
        <div class="control-panel">
          <div class="info-container">
            <ana-image src={this.logoSrc} alt="header logo" size="medium"></ana-image>
            <ana-title content={this.mainTitle} subtitle={this.subtitle || undefined} size="medium" color="#fff"></ana-title>
            <ana-button content="Join" identifier="joinButton"></ana-button>
          </div>
          <ana-tabs tabs={this.tabs} buttonType="tab" identifier="headerTabs"></ana-tabs>
        </div>
      </Host>
    );
  }
}
