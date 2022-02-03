import { Component, ComponentInterface, Event, EventEmitter, h, Host, Listen, State } from '@stencil/core';

import { Identifier } from '../../atoms/ana-button/ana-button';

interface Filter {
  title: string;
  selected: boolean;
  icon: string;
}

@Component({
  tag: 'ana-filters',
  styleUrl: 'ana-filters.scss',
  shadow: true,
  assetsDirs: ['assets'],
})
export class AnaFilters implements ComponentInterface {
  buttonsType: 'primary' | 'secondary' | 'action' = 'secondary';
  @State() filters: Filter[] = [
    {
      title: 'Hot',
      selected: true,
      icon: 'Hot.png',
    },
    {
      title: 'New',
      selected: false,
      icon: 'new.png',
    },
    {
      title: 'Top',
      selected: false,
      icon: 'top.png',
    },
  ];

  @Event({
    eventName: 'filterChange',
    bubbles: true,
    composed: true,
  })
  filterChange: EventEmitter<string>;

  @Listen('buttonClicked')
  filterChangeHandler(event: CustomEvent<Identifier>) {
    this.filters.find((f) => f.selected).selected = false;
    this.filters.find((f) => f.title === event.detail).selected = true;
    this.filters = [...this.filters];
    this.filterChange.emit('filterChange');
  }

  render() {
    return (
      <Host>
        <div class="filters-container">
          {this.filters.map((f) => (
            <ana-button identifier={f.title} type={this.buttonsType} content={f.title} selected={f.selected}></ana-button>
          ))}
        </div>
      </Host>
    );
  }
}
