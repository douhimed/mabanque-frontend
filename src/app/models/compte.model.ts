export class Compte {
  constructor(
    public id?: number,
    public dateCreation?: Date,
    public solde?: number,
    public taux?: number,
    public decouvert?: number,
    public clientId?: number,
    public type?: string,
    public codeCompte?: string,
    public carteType?: string
  ) {}
}
