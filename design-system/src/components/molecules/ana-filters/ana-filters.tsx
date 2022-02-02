import { Component, ComponentInterface, h, Host } from '@stencil/core';

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
  filters: Filter[] = [
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

  onFilterChange(newFilter: Filter) {
    this.filters.find((f) => f.selected).selected = false;
    this.filters.find((f) => f.title === newFilter.title).selected = true;
  }

  render() {
    return (
      <Host>
        <div class="filters-container">
          {this.filters.map((f) => (
            <ana-button type={this.buttonsType} content={f.title} selected={f.selected}></ana-button>
          ))}
        </div>
      </Host>
    );
  }
}
