export class Note {
  id: number;
  text: string;
  creationTime: string;

  constructor() {
    this.creationTime = new Date().toString();
  }
}
