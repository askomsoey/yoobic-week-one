/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { Identifier } from './components/atoms/ana-button/ana-button';
export namespace Components {
  interface AnaButton {
    content?: string;
    icon?: string;
    identifier?: Identifier;
    selected?: boolean;
    type: 'primary' | 'secondary' | 'action';
  }
  interface AnaDropdown {
    close: () => Promise<void>;
    elevated: boolean;
    open: () => Promise<void>;
    shape: 'round' | 'smooth' | 'sharp';
    toggle: () => Promise<void>;
    type: 'primary' | 'secondary' | 'action';
  }
  interface AnaFilters {}
  interface AnaImage {
    alt: string;
    shape?: 'round' | 'smooth' | 'sharp';
    size?: 'large' | 'medium' | 'small' | 'xsmall';
    src: string;
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
  interface HTMLAnaDropdownElement extends Components.AnaDropdown, HTMLStencilElement {}
  var HTMLAnaDropdownElement: {
    prototype: HTMLAnaDropdownElement;
    new (): HTMLAnaDropdownElement;
  };
  interface HTMLAnaFiltersElement extends Components.AnaFilters, HTMLStencilElement {}
  var HTMLAnaFiltersElement: {
    prototype: HTMLAnaFiltersElement;
    new (): HTMLAnaFiltersElement;
  };
  interface HTMLAnaImageElement extends Components.AnaImage, HTMLStencilElement {}
  var HTMLAnaImageElement: {
    prototype: HTMLAnaImageElement;
    new (): HTMLAnaImageElement;
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
    'ana-dropdown': HTMLAnaDropdownElement;
    'ana-filters': HTMLAnaFiltersElement;
    'ana-image': HTMLAnaImageElement;
    'ana-title': HTMLAnaTitleElement;
    'my-component': HTMLMyComponentElement;
  }
}
declare namespace LocalJSX {
  interface AnaButton {
    content?: string;
    icon?: string;
    identifier?: Identifier;
    onButtonClicked?: (event: CustomEvent<Identifier>) => void;
    selected?: boolean;
    type?: 'primary' | 'secondary' | 'action';
  }
  interface AnaDropdown {
    elevated?: boolean;
    shape?: 'round' | 'smooth' | 'sharp';
    type?: 'primary' | 'secondary' | 'action';
  }
  interface AnaFilters {
    onFilterChange?: (event: CustomEvent<string>) => void;
  }
  interface AnaImage {
    alt: string;
    shape?: 'round' | 'smooth' | 'sharp';
    size?: 'large' | 'medium' | 'small' | 'xsmall';
    src: string;
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
    'ana-dropdown': AnaDropdown;
    'ana-filters': AnaFilters;
    'ana-image': AnaImage;
    'ana-title': AnaTitle;
    'my-component': MyComponent;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'ana-button': LocalJSX.AnaButton & JSXBase.HTMLAttributes<HTMLAnaButtonElement>;
      'ana-dropdown': LocalJSX.AnaDropdown & JSXBase.HTMLAttributes<HTMLAnaDropdownElement>;
      'ana-filters': LocalJSX.AnaFilters & JSXBase.HTMLAttributes<HTMLAnaFiltersElement>;
      'ana-image': LocalJSX.AnaImage & JSXBase.HTMLAttributes<HTMLAnaImageElement>;
      'ana-title': LocalJSX.AnaTitle & JSXBase.HTMLAttributes<HTMLAnaTitleElement>;
      'my-component': LocalJSX.MyComponent & JSXBase.HTMLAttributes<HTMLMyComponentElement>;
    }
  }
}
