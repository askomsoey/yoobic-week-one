import { Component, ComponentInterface, Event, EventEmitter, h, Host, Method, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';
import { Tab } from '../../shared/tab';

@Component({
  tag: 'ana-tabs',
  styleUrl: 'ana-tabs.scss',
  assetsDirs: ['assets'],
})
export class AnaTabs implements ComponentInterface {
  @Prop() identifier?: Identifier = 'tabs';
  @Prop() buttonType?: 'primary' | 'secondary' | 'action' | 'tab' = 'secondary';
  @Prop() tabs: Tab[] = [];
  @State() selectedTab = '';

  @Event({
    eventName: 'tabChange',
    bubbles: true,
    composed: true,
  })
  tabChange: EventEmitter<{ tabsId: Identifier; tabId: Identifier }>;

  filterChangeHandler(event: CustomEvent<Identifier>) {
    this.selectedTab = event.detail;
    this.tabChange.emit({ tabsId: this.identifier, tabId: event.detail });
  }

  connectedCallback() {
    if (this.tabs.length) {
      this.selectedTab = this.tabs.find((tab: Tab) => tab.selected).id || this.tabs[0].id;
    }
  }

  @Method()
  async getSelected() {
    return this.selectedTab;
  }

  render() {
    return (
      <Host>
        <div class="container">
          {this.tabs.map((t) => (
            <ana-button
              onButtonClicked={this.filterChangeHandler.bind(this)}
              identifier={t.id}
              type={this.buttonType}
              content={t.title}
              selected={t.id === this.selectedTab}
              icon={t.icon || undefined}
            ></ana-button>
          ))}
        </div>
      </Host>
    );
  }
}
