/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import { Component } from './component';

export class Header extends Component {
  constructor(selector: string, public title: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <header>
      <h1>${this.title}</h1>
    </header>
    `;
  }
}
