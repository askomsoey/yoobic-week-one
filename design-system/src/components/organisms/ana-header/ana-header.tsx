import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

import { Tab } from '../../shared/tab';

@Component({
  tag: 'ana-header',
  styleUrl: 'ana-header.scss',
  shadow: true,
})
export class AnaHeader implements ComponentInterface {
  @Prop() headerBackgroundImg?: string;
  @Prop() pageLogoSrc!: string;
  @Prop() titleContent!: string;
  @Prop() subtitleContent?: string;
  @Prop() tabsData: Tab[] = [];

  render() {
    return (
      <Host>
        <div class="header-img-container">{this.headerBackgroundImg && <img src={this.headerBackgroundImg} alt="header" />}</div>
        <div class="control-panel">
          <ana-image src={this.pageLogoSrc} alt="header logo" size="medium"></ana-image>
          <ana-title content={this.titleContent} subtitle={this.subtitleContent || undefined} size="medium" color="#fff"></ana-title>
          <ana-button content="Join" identifier="joinButton"></ana-button>
          <ana-tabs tabs={this.tabsData} buttonType="tab" identifier="headerTabs"></ana-tabs>
        </div>
      </Host>
    );
  }
}
