import { Component, ComponentInterface, h, Host, Listen, Method, Prop, State } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'ana-dropdown',
  styleUrl: 'ana-dropdown.scss',
  shadow: true,
})
export class AnaDropdown implements ComponentInterface {
  @Prop() type: 'primary' | 'secondary' | 'action' = 'primary';
  @Prop() shape: 'round' | 'smooth' | 'sharp' = 'smooth';
  @Prop() elevated = false;

  @State() isOpen = false;

  @Listen('buttonClicked')
  buttonClickedHandler(event: CustomEvent<Identifier>) {
    if (event.detail === 'dropdownMenuButton') {
      this.toggle();
    }
  }

  @Method()
  async open() {
    this.isOpen = true;
  }

  @Method()
  async close() {
    this.isOpen = false;
  }

  @Method()
  async toggle() {
    this.isOpen = !this.isOpen;
  }

  render() {
    return (
      <Host>
        <div class={`backdrop ${this.isOpen ? '' : 'hidden'}`} onClick={this.close.bind(this)} />
        <ana-button identifier="dropdownMenuButton" type={this.type}>
          <slot name="button" />
        </ana-button>
        <div class={`dropdown ${this.isOpen ? '' : 'hidden'} ${this.type} ${this.shape} ${this.elevated}`}>
          <slot name="menu" />
        </div>
      </Host>
    );
  }
}
