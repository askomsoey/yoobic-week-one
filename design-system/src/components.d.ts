/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
export namespace Components {
  interface AnaButton {
    content: string;
    icon?: string;
    selected: boolean;
    type: 'primary' | 'secondary' | 'action';
  }
  interface AnaTitle {
    color?: string;
    content: string;
    elevated: boolean;
    size?: 'large' | 'medium' | 'small';
  }
  interface MyComponent {
    first?: string;
    last?: string;
  }
}
declare global {
  interface HTMLAnaButtonElement extends Components.AnaButton, HTMLStencilElement {}
  var HTMLAnaButtonElement: {
    prototype: HTMLAnaButtonElement;
    new (): HTMLAnaButtonElement;
  };
  interface HTMLAnaTitleElement extends Components.AnaTitle, HTMLStencilElement {}
  var HTMLAnaTitleElement: {
    prototype: HTMLAnaTitleElement;
    new (): HTMLAnaTitleElement;
  };
  interface HTMLMyComponentElement extends Components.MyComponent, HTMLStencilElement {}
  var HTMLMyComponentElement: {
    prototype: HTMLMyComponentElement;
    new (): HTMLMyComponentElement;
  };
  interface HTMLElementTagNameMap {
    'ana-button': HTMLAnaButtonElement;
    'ana-title': HTMLAnaTitleElement;
    'my-component': HTMLMyComponentElement;
  }
}
declare namespace LocalJSX {
  interface AnaButton {
    content?: string;
    icon?: string;
    selected?: boolean;
    type?: 'primary' | 'secondary' | 'action';
  }
  interface AnaTitle {
    color?: string;
    content: string;
    elevated?: boolean;
    size?: 'large' | 'medium' | 'small';
  }
  interface MyComponent {
    first?: string;
    last?: string;
  }
  interface IntrinsicElements {
    'ana-button': AnaButton;
    'ana-title': AnaTitle;
    'my-component': MyComponent;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'ana-button': LocalJSX.AnaButton & JSXBase.HTMLAttributes<HTMLAnaButtonElement>;
      'ana-title': LocalJSX.AnaTitle & JSXBase.HTMLAttributes<HTMLAnaTitleElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}
