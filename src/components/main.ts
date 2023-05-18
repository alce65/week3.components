/* eslint-disable no-unused-vars */
import './main.css';
import { Component } from './component';

export class Main extends Component {
  constructor(selector: string) {
    super(selector);
    this.template = this.createTemplate();
    this.render();
    console.log(this.element);
  }

  createTemplate() {
    return `
    <main>
    </main>
    `;
  }
}
