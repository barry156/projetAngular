export class ContactModel{
  id:number;
  nomLieu: string;
  pays: string;
  imageUrl: string;
  region: string;
  activites:string;
  nomPersonne:string;
  prenomPersonne: string;
  identifiantIG: string;
  numTel : number;
  facebook: string;
  photoUrl:string;
email:string;


  constructor(id:number, nomLieu: string, pays:string, imageUrl:string,region:string,activites:string, nomPersonne:string,prenomPersonne: string,identifiantIG: string,numTel : number,facebook: string, photoUrl:string, email:string
  ) {
    this.id=id;
    this.nomLieu=nomLieu;
    this.pays=pays;
    this.imageUrl=imageUrl;
    this.region=region;
    this.nomPersonne=nomPersonne;
    this.prenomPersonne=prenomPersonne;
    this.identifiantIG=identifiantIG;
    this.numTel=numTel;
    this.facebook=facebook;
    this.photoUrl=photoUrl;
    this.email=email;
   this.activites=activites;
  }
}
