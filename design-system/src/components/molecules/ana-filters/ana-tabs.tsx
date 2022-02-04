import { Component, ComponentInterface, Event, EventEmitter, h, Host, Listen, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'ana-tabs',
  styleUrl: 'ana-tabs.scss',
  assetsDirs: ['assets'],
})
export class AnaTabs implements ComponentInterface {
  @Prop() buttonType?: 'primary' | 'secondary' | 'action' | 'tab' = 'secondary';
  @Prop() tabs: any = [];
  @State() selectedTab: string;

  @Event({
    eventName: 'tabChange',
    bubbles: true,
    composed: true,
  })
  tabChange: EventEmitter<string>;

  @Listen('buttonClicked')
  filterChangeHandler(event: CustomEvent<Identifier>) {
    this.selectedTab = event.detail;
  }

  connectedCallback() {
    if (this.tabs.length) {
      this.selectedTab = this.tabs[0].id;
    }
  }

  render() {
    return (
      <Host>
        <div class="container">
          {this.tabs.map((f) => (
            <ana-button identifier={f.id} type={this.buttonType} content={f.title} selected={f.id === this.selectedTab} icon={f.icon || undefined}></ana-button>
          ))}
        </div>
      </Host>
    );
  }
}
