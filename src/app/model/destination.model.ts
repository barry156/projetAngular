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
  galerie:string [];

  constructor(id: number, nomlieu: string, pays: string, continent: string, region: string,prix:number,  afficheUrl: string, like: number, galerie:string[], note?: number) {
    this.id = id;
    this.nomlieu = nomlieu;
    this.pays=pays;
    this.continent=continent;
    this.region=region;

    this.prix=prix;
    this.afficheUrl=afficheUrl;

    this.like = like;
    this.galerie=galerie;
    this.note = note;



  }
}

