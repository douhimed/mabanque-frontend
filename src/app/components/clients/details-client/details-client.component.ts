import { Component, OnInit } from "@angular/core";
import { ConseillerService } from "./../../../services/conseiller.service";
import { ActivatedRoute } from "@angular/router";
import { Client } from "src/app/models/client.model";
import { Compte } from "src/app/models/compte.model";

@Component({
  selector: "app-details-client",
  templateUrl: "./details-client.component.html",
  styleUrls: ["./details-client.component.css"]
})
export class DetailsClientComponent implements OnInit {
  client: Client = new Client();
  comptesCourant: Compte[] = [];
  comptesEpargne: Compte[] = [];
  status: string = "comptes";

  comptes: any[];

  constructor(
    private conseillerService: ConseillerService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.fetchClient();
  }

  fetchClient() {
    this.conseillerService
      .getClient(this.route.snapshot.params["id"])
      .subscribe(resp => {
        this.client = resp;
        this.rangeCompte(this.client["comptes"]);
        this.comptes = this.client["comptes"];
      });
  }

  onChangeStatus(status) {
    this.status = status;
    console.log(this.status);
  }

  getStatus() {
    return this.status;
  }
  rangeCompte(comptes) {
    this.comptesCourant = [];
    this.comptesEpargne = [];
    comptes.forEach(compte =>
      compte["taux"] && !compte["decouvert"]
        ? this.comptesEpargne.push(compte)
        : this.comptesCourant.push(compte)
    );
  }
}
