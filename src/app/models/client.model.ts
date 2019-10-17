import { Compte } from "./compte.model";

export class Client {
  constructor(
    public id?: number,
    public nom?: string,
    public prenom?: string,
    public adresse?: String,
    public tel?: string,
    public codePostal?: number,
    public ville?: string,
    public comptes?: Compte[],
    public conseillerID?: number
  ) {}
}
