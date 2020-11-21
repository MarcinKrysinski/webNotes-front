export class Note {
  id: number;
  text: string;
  creationTime: string;

  constructor(id: number, text: string, creationTime: string) {
    this.id = id;
    this.text = text;
    this.creationTime = creationTime;
  }
}
