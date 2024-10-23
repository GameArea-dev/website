interface LatestNewsApiModel {
  title: string;
  caption: string;
  date?: Date;
  type: number;
  linkId: string;
}

export class LatestNewsModel {
  title: string;
  caption: string;
  date?: Date;
  type: number;
  linkId: string;

  constructor(model: LatestNewsApiModel) {
    this.title = model.title;
    this.caption = model.caption;
    this.date = model.date;
    this.type = model.type;
    this.linkId = model.linkId;
  }
}
