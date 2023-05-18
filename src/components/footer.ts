/* eslint-disable no-unused-vars */
import { Component } from './component';

export class Footer extends Component {
  constructor(selector: string, public brand: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <footer>
      <address>${this.brand}</address>
    </footer>
    `;
  }
}
