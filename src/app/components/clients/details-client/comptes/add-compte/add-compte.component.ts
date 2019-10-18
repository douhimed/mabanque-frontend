import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Compte } from "./../../../../../models/compte.model";
import { ConseillerService } from "./../../../../../services/conseiller.service";

@Component({
  selector: "app-add-compte",
  templateUrl: "./add-compte.component.html",
  styleUrls: ["./add-compte.component.css"]
})
export class AddCompteComponent implements OnInit {
  @Input() status: string = "comptes";
  compte: Compte = new Compte();
  @Input() clientID: number = 0;
  message: string = null;
  @Output() onAddCompte = new EventEmitter<boolean>();

  constructor(private conseillerSrvice: ConseillerService) {}

  ngOnInit() {}

  onChangeStatus(status) {
    this.status = status;
  }

  onSaveCompte() {
    this.compte.clientId = this.clientID;
    this.compte.type = "epargne";
    this.compte.taux = 3;
    this.compte.decouvert = 1000;
    this.conseillerSrvice.addCompte(this.compte).subscribe(() => {
      this.message = "Le compte est bien enregistré";
      this.compte = new Compte();
      this.onAddCompte.emit(true);
    });
  }
}
