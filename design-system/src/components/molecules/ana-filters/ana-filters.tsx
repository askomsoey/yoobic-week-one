import { Component, ComponentInterface, Event, EventEmitter, h, Host, Listen, Prop, State } from '@stencil/core';

import { Identifier } from '../../atoms/ana-button/ana-button';

@Component({
  tag: 'ana-filters',
  styleUrl: 'ana-filters.scss',
  assetsDirs: ['assets'],
})
export class AnaFilters implements ComponentInterface {
  buttonsType: 'primary' | 'secondary' | 'action' = 'secondary';
  @Prop() filters: any = [];
  @State() selectedFilter: string;

  @Event({
    eventName: 'filterChange',
    bubbles: true,
    composed: true,
  })
  filterChange: EventEmitter<string>;

  @Listen('buttonClicked')
  filterChangeHandler(event: CustomEvent<Identifier>) {
    this.selectedFilter = event.detail;
  }

  connectedCallback() {
    if (this.filters.length) {
      this.selectedFilter = this.filters[0].id;
    }
  }

  render() {
    return (
      <Host>
        <div class="filters-container">
          {this.filters.map((f) => (
            <ana-button identifier={f.id} type={this.buttonsType} content={f.title} selected={f.id === this.selectedFilter} icon={f.icon}></ana-button>
          ))}
        </div>
      </Host>
    );
  }
}
