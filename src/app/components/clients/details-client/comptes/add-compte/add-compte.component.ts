import { Component, OnInit, Input } from "@angular/core";
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

  constructor(private conseillerSrvice: ConseillerService) {}

  ngOnInit() {}

  onChangeStatus(status) {
    this.status = status;
  }

  onAddCompte() {
    this.compte.clientId = this.clientID;
    this.compte.type = this.status;
    this.conseillerSrvice.addCompte(this.compte).subscribe(() => {
      this.message = "Le compte est bien enregistré";
      this.compte = new Compte();
    });
  }
}
