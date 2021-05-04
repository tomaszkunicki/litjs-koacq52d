import { html, css, LitElement } from 'lit';

class MyCounter extends LitElement {
  con

  static get styles() {
    return css`
      * {
        font-size: 200%;
      }

      span {
        width: 4rem;
        display: inline-block;
        text-align: center;
      }

      button {
        width: 4rem;
        height: 4rem;
        border: none;
        border-radius: 10px;
        background-color: seagreen;
        color: white;
      }`;
  }

  static get properties() {
    return {
      count: {type: Number},
    };
  }

  constructor() {
    super();
    this.count = 0;
  }

  render() {
    return html`
      <button @click="${this.dec}">-</button>
      <span>${this.count}</span>
      <button @click="${this.inc}">+</button>
    `;
  }

  inc() {
    this.count++;
  }

  dec() {
    this.count--;
  }

}

window.customElements.define('my-counter', MyCounter);