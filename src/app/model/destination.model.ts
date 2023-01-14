export class destination {
  id: number;
  nomlieu: string;
  pays: string;
  continent: string;
  region: string;
  prix: number;


  afficheUrl: string;
  like: number;
  note?: number;

  constructor(id: number, nomlieu: string, pays: string, continent: string, region: string,prix:number,  afficheUrl: string, like: number, note?: number) {
    this.id = id;
    this.nomlieu = nomlieu;
    this.pays=pays;
    this.continent=continent;
    this.region=region;

    this.prix=prix;
    this.afficheUrl=afficheUrl;

    this.like = like;
    this.note = note;


  }
}

