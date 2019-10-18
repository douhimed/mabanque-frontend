export class Operation {
  constructor(
    public id?: number,
    public type?: string,
    public montant?: number,
    public compteOne?: number,
    public compteTwo?: number,
    public conseillerID?: number,
    public date?: Date
  ) {}
}
