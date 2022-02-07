import { Component, ComponentInterface, Event, EventEmitter, h, Host, Listen, Prop } from '@stencil/core';

import { Identifier } from '../../shared/identifier';

@Component({
  tag: 'ana-post-actions',
  styleUrl: 'ana-post-actions.scss',
})
export class AnaPostActions implements ComponentInterface {
  @Prop() identifier?: string = 'votes';
  @Prop() actions: any = [];
  @Prop() moreActions?: any = [];

  @Event({
    eventName: 'actionClicked',
    bubbles: true,
    composed: true,
  })
  actionClicked: EventEmitter<Identifier>;

  @Listen('buttonClicked')
  buttonClickedHandler(event: CustomEvent<Identifier>) {
    if (event.detail !== 'dropdownMenuButton') {
      this.actionClicked.emit(event.detail);
    }
  }

  renderActions() {
    return this.actions.map((a) => <ana-button identifier={a.id} type="action" content={a.label} icon={a.icon}></ana-button>);
  }

  renderMoreActions() {
    return (
      <ana-dropdown type="action">
        <i slot="button" class="fas fa-ellipsis-h"></i>
        <div slot="menu">
          {this.moreActions.map((a) => (
            <ana-button identifier={a.id} type="action" content={a.label} icon={a.icon}></ana-button>
          ))}
        </div>
      </ana-dropdown>
    );
  }

  render() {
    return (
      <Host>
        <div class="actions-container">
          {this.renderActions()}
          {this.moreActions.length ? this.renderMoreActions() : ''}
        </div>
      </Host>
    );
  }
}
