import { Component, Host, Prop, h } from '@stencil/core';

@Component({
  tag: 'swc-notification',
  styleUrl: 'swc-notification.css',
  shadow: true,
})
export class SwcNotification {
  @Prop({
    attribute: 'type',
    reflect: true,
    mutable: true,
  })
  type: string = 'info';

  @Prop({
    reflect: true,
  })
  content: string;

  @Prop({
    reflect: true,
  })
  header: string;

  @Prop({
    attribute: 'show',
    reflect: true,
    mutable: true,
  })
  show: boolean;
  render() {
    return (
      <Host>
        <svg xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', width: '0px', height: '0px', overflow: 'hidden' }}>
          <symbol id="success" fill="none" viewBox="0 0 48 48">
            <path
              stroke-linejoin="round"
              stroke-width="3"
              stroke="currentColor"
              d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
              data-follow-stroke="#9b9b9b"
            />
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="m16 24 6 6 12-12" data-follow-stroke="#9b9b9b" />
          </symbol>
          <symbol id="warning" fill="none" viewBox="0 0 48 48">
            <path
              stroke-linejoin="round"
              stroke-width="3"
              stroke="currentColor"
              d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
              data-follow-stroke="#9b9b9b"
            />
            <path fill="currentColor" d="M24 37a2.5 2.5 0 1 0 0-5 2.5 2.5 0 0 0 0 5Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#9b9b9b" />
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="M24 12v16" data-follow-stroke="#9b9b9b" />
          </symbol>
          <symbol id="danger" fill="none" viewBox="0 0 48 48">
            <path
              stroke-linejoin="round"
              stroke-width="3"
              stroke="currentColor"
              d="M24 44c11.046 0 20-8.954 20-20S35.046 4 24 4 4 12.954 4 24s8.954 20 20 20Z"
              data-follow-stroke="#9b9b9b"
            />
            <path
              stroke-linejoin="round"
              stroke-linecap="round"
              stroke-width="3"
              stroke="currentColor"
              d="M29.657 18.343 18.343 29.657M18.343 18.343l11.314 11.314"
              data-follow-stroke="#9b9b9b"
            />
          </symbol>
          <symbol id="info" fill="none" viewBox="0 0 48 48">
            <path
              stroke-linejoin="round"
              stroke-width="3"
              stroke="currentColor"
              d="M24 44a19.937 19.937 0 0 0 14.142-5.858A19.937 19.937 0 0 0 44 24a19.938 19.938 0 0 0-5.858-14.142A19.937 19.937 0 0 0 24 4 19.938 19.938 0 0 0 9.858 9.858 19.938 19.938 0 0 0 4 24a19.937 19.937 0 0 0 5.858 14.142A19.938 19.938 0 0 0 24 44Z"
              data-follow-stroke="#9b9b9b"
            />
            <path fill="currentColor" d="M24 11a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5Z" clip-rule="evenodd" fill-rule="evenodd" data-follow-fill="#9b9b9b" />
            <path stroke-linejoin="round" stroke-linecap="round" stroke-width="3" stroke="currentColor" d="M24.5 34V20h-2M21 34h7" data-follow-stroke="#9b9b9b" />
          </symbol>
        </svg>
        <div class="notification">
          <svg class="icon">
            <use xlinkHref={`#${this.type === 'error' ? 'danger' : this.type}`}></use>
          </svg>
          <div class="notification-wrap">
            <div class="notification-header">{this.header}</div>
            <div class="notification-content">{this.content}</div>
          </div>
        </div>
      </Host>
    );
  }
}
