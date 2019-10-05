export class Employe {
  constructor(
    public nom: string,
    public prenom: string,
    public id?: number,
    public login?: string,
    public password?: string
  ) {}
}
