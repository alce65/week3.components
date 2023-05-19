/* eslint-disable no-unused-vars */
export type TaskStructure = {
  id: string;
  title: string;
  owner: string;
  isCompleted: boolean;
};

export class Task implements TaskStructure {
  static generateID() {
    return Math.trunc(Math.random() * 1_000_000_000_000).toString();
  }

  id!: string;
  isCompleted: boolean;
  constructor(public title: string, public owner: string) {
    this.isCompleted = false;
  }
}
