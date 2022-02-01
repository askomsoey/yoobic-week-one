import { Component, ComponentInterface, h, Host, Prop } from '@stencil/core';

@Component({
  tag: 'my-component',
  styleUrl: 'my-component.scss',
  shadow: true,
})
export class MyComponent implements ComponentInterface {
  @Prop() first?: string;
  @Prop() last?: string;

  render() {
    return <Host>{`Hello, my name is ${this.first} ${this.last}`}</Host>;
  }
}
