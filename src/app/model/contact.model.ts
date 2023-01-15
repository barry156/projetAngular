export class ContactModel{
  id:number;
  activites:string;
  nomPersonne:string;
  prenomPersonne: string;
  identifiantIG: string;
  numTel : number;
  facebook: string;
  photoUrl:string;
  email:string;


  constructor(id:number,activites:string, nomPersonne:string,prenomPersonne: string,identifiantIG: string,numTel : number,facebook: string, photoUrl:string, email:string
  ) {
    this.id=id;
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
