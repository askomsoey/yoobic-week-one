/* eslint-disable */
/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */
import { HTMLStencilElement, JSXBase } from '@stencil/core/internal';
import { Identifier } from './components/shared/identifier';
import { CardType } from './components/shared/card-type';
import { CardStyle } from './components/shared/card-style';
import { Post } from './components/shared/post';
import { Tab } from './components/shared/tab';
import { Variant } from './components/molecules/ana-votes/ana-votes';
export namespace Components {
  interface AnaButton {
    content?: string;
    icon?: string;
    identifier?: Identifier;
    selected?: boolean;
    type: 'primary' | 'secondary' | 'action' | 'tab';
  }
  interface AnaCard {
    cardStyle?: CardStyle;
    post?: Post;
    tabs?: Tab[];
    type?: CardType;
  }
  interface AnaDropdown {
    close: () => Promise<void>;
    elevated: boolean;
    open: () => Promise<void>;
    shape: 'round' | 'smooth' | 'sharp';
    toggle: () => Promise<void>;
    type: 'primary' | 'secondary' | 'action';
  }
  interface AnaFeed {
    filters: Tab[];
    posts?: Post[];
  }
  interface AnaHeader {
    backgroundImg?: string;
    logoSrc: string;
    mainTitle: string;
    subtitle?: string;
    tabs: Tab[];
  }
  interface AnaImage {
    alt: string;
    shape?: 'round' | 'smooth' | 'sharp';
    size?: 'large' | 'medium' | 'small' | 'xsmall';
    src: string;
  }
  interface AnaPostActions {
    actions: any;
    identifier?: string;
    moreActions?: any;
  }
  interface AnaReddit {
    filters: Tab[];
    headerImg?: string;
    headerTabs: Tab[];
    logoSrc: string;
    mainTitle: string;
    posts: Post[];
    subtitle: string;
  }
  interface AnaTabs {
    buttonType?: 'primary' | 'secondary' | 'action' | 'tab';
    getSelected: () => Promise<string>;
    identifier?: Identifier;
    tabs: Tab[];
  }
  interface AnaTitle {
    color?: string;
    content: string;
    elevated: boolean;
    size?: 'large' | 'medium' | 'small' | 'xsmall';
    subtitle?: string;
  }
  interface AnaVotes {
    identifier?: string;
    totalVotes: number;
    variant?: Variant;
  }
}
declare global {
  interface HTMLAnaButtonElement extends Components.AnaButton, HTMLStencilElement {}
  var HTMLAnaButtonElement: {
    prototype: HTMLAnaButtonElement;
    new (): HTMLAnaButtonElement;
  };
  interface HTMLAnaCardElement extends Components.AnaCard, HTMLStencilElement {}
  var HTMLAnaCardElement: {
    prototype: HTMLAnaCardElement;
    new (): HTMLAnaCardElement;
  };
  interface HTMLAnaDropdownElement extends Components.AnaDropdown, HTMLStencilElement {}
  var HTMLAnaDropdownElement: {
    prototype: HTMLAnaDropdownElement;
    new (): HTMLAnaDropdownElement;
  };
  interface HTMLAnaFeedElement extends Components.AnaFeed, HTMLStencilElement {}
  var HTMLAnaFeedElement: {
    prototype: HTMLAnaFeedElement;
    new (): HTMLAnaFeedElement;
  };
  interface HTMLAnaHeaderElement extends Components.AnaHeader, HTMLStencilElement {}
  var HTMLAnaHeaderElement: {
    prototype: HTMLAnaHeaderElement;
    new (): HTMLAnaHeaderElement;
  };
  interface HTMLAnaImageElement extends Components.AnaImage, HTMLStencilElement {}
  var HTMLAnaImageElement: {
    prototype: HTMLAnaImageElement;
    new (): HTMLAnaImageElement;
  };
  interface HTMLAnaPostActionsElement extends Components.AnaPostActions, HTMLStencilElement {}
  var HTMLAnaPostActionsElement: {
    prototype: HTMLAnaPostActionsElement;
    new (): HTMLAnaPostActionsElement;
  };
  interface HTMLAnaRedditElement extends Components.AnaReddit, HTMLStencilElement {}
  var HTMLAnaRedditElement: {
    prototype: HTMLAnaRedditElement;
    new (): HTMLAnaRedditElement;
  };
  interface HTMLAnaTabsElement extends Components.AnaTabs, HTMLStencilElement {}
  var HTMLAnaTabsElement: {
    prototype: HTMLAnaTabsElement;
    new (): HTMLAnaTabsElement;
  };
  interface HTMLAnaTitleElement extends Components.AnaTitle, HTMLStencilElement {}
  var HTMLAnaTitleElement: {
    prototype: HTMLAnaTitleElement;
    new (): HTMLAnaTitleElement;
  };
  interface HTMLAnaVotesElement extends Components.AnaVotes, HTMLStencilElement {}
  var HTMLAnaVotesElement: {
    prototype: HTMLAnaVotesElement;
    new (): HTMLAnaVotesElement;
  };
  interface HTMLElementTagNameMap {
    'ana-button': HTMLAnaButtonElement;
    'ana-card': HTMLAnaCardElement;
    'ana-dropdown': HTMLAnaDropdownElement;
    'ana-feed': HTMLAnaFeedElement;
    'ana-header': HTMLAnaHeaderElement;
    'ana-image': HTMLAnaImageElement;
    'ana-post-actions': HTMLAnaPostActionsElement;
    'ana-reddit': HTMLAnaRedditElement;
    'ana-tabs': HTMLAnaTabsElement;
    'ana-title': HTMLAnaTitleElement;
    'ana-votes': HTMLAnaVotesElement;
  }
}
declare namespace LocalJSX {
  interface AnaButton {
    content?: string;
    icon?: string;
    identifier?: Identifier;
    onButtonClicked?: (event: CustomEvent<Identifier>) => void;
    selected?: boolean;
    type?: 'primary' | 'secondary' | 'action' | 'tab';
  }
  interface AnaCard {
    cardStyle?: CardStyle;
    onCardStyleChange?: (event: CustomEvent<CardStyle>) => void;
    onPostVote?: (event: CustomEvent<{ post: Post; score: number }>) => void;
    post?: Post;
    tabs?: Tab[];
    type?: CardType;
  }
  interface AnaDropdown {
    elevated?: boolean;
    shape?: 'round' | 'smooth' | 'sharp';
    type?: 'primary' | 'secondary' | 'action';
  }
  interface AnaFeed {
    filters: Tab[];
    posts?: Post[];
  }
  interface AnaHeader {
    backgroundImg?: string;
    logoSrc: string;
    mainTitle: string;
    subtitle?: string;
    tabs?: Tab[];
  }
  interface AnaImage {
    alt: string;
    shape?: 'round' | 'smooth' | 'sharp';
    size?: 'large' | 'medium' | 'small' | 'xsmall';
    src: string;
  }
  interface AnaPostActions {
    actions?: any;
    identifier?: string;
    moreActions?: any;
    onActionClicked?: (event: CustomEvent<Identifier>) => void;
  }
  interface AnaReddit {
    filters?: Tab[];
    headerImg?: string;
    headerTabs?: Tab[];
    logoSrc: string;
    mainTitle?: string;
    posts?: Post[];
    subtitle?: string;
  }
  interface AnaTabs {
    buttonType?: 'primary' | 'secondary' | 'action' | 'tab';
    identifier?: Identifier;
    onTabChange?: (event: CustomEvent<{ tabsId: Identifier; tabId: Identifier }>) => void;
    tabs?: Tab[];
  }
  interface AnaTitle {
    color?: string;
    content: string;
    elevated?: boolean;
    size?: 'large' | 'medium' | 'small' | 'xsmall';
    subtitle?: string;
  }
  interface AnaVotes {
    identifier?: string;
    onVotesDecremented?: (event: CustomEvent<Identifier>) => void;
    onVotesIncremented?: (event: CustomEvent<Identifier>) => void;
    totalVotes: number;
    variant?: Variant;
  }
  interface IntrinsicElements {
    'ana-button': AnaButton;
    'ana-card': AnaCard;
    'ana-dropdown': AnaDropdown;
    'ana-feed': AnaFeed;
    'ana-header': AnaHeader;
    'ana-image': AnaImage;
    'ana-post-actions': AnaPostActions;
    'ana-reddit': AnaReddit;
    'ana-tabs': AnaTabs;
    'ana-title': AnaTitle;
    'ana-votes': AnaVotes;
  }
}
export { LocalJSX as JSX };
declare module '@stencil/core' {
  export namespace JSX {
    interface IntrinsicElements {
      'ana-button': LocalJSX.AnaButton & JSXBase.HTMLAttributes<HTMLAnaButtonElement>;
      'ana-card': LocalJSX.AnaCard & JSXBase.HTMLAttributes<HTMLAnaCardElement>;
      'ana-dropdown': LocalJSX.AnaDropdown & JSXBase.HTMLAttributes<HTMLAnaDropdownElement>;
      'ana-feed': LocalJSX.AnaFeed & JSXBase.HTMLAttributes<HTMLAnaFeedElement>;
      'ana-header': LocalJSX.AnaHeader & JSXBase.HTMLAttributes<HTMLAnaHeaderElement>;
      'ana-image': LocalJSX.AnaImage & JSXBase.HTMLAttributes<HTMLAnaImageElement>;
      'ana-post-actions': LocalJSX.AnaPostActions & JSXBase.HTMLAttributes<HTMLAnaPostActionsElement>;
      'ana-reddit': LocalJSX.AnaReddit & JSXBase.HTMLAttributes<HTMLAnaRedditElement>;
      'ana-tabs': LocalJSX.AnaTabs & JSXBase.HTMLAttributes<HTMLAnaTabsElement>;
      'ana-title': LocalJSX.AnaTitle & JSXBase.HTMLAttributes<HTMLAnaTitleElement>;
      'ana-votes': LocalJSX.AnaVotes & JSXBase.HTMLAttributes<HTMLAnaVotesElement>;
    }
  }
}
