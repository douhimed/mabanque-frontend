import { Component, OnInit } from "@angular/core";
import { ConseillerService } from "./../../../services/conseiller.service";
import { ActivatedRoute, Router } from "@angular/router";
import { Client } from "src/app/models/client.model";
import { Compte } from "src/app/models/compte.model";
import { AuthService } from "./../../../services/auth.service";

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
  comptesEpargneStatus: boolean = true;

  constructor(
    private conseillerService: ConseillerService,
    private route: ActivatedRoute,
    private router: Router,
    private auth: AuthService
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

  onSavingCompte(status: boolean) {
    if (status) this.fetchClient();
  }

  onChangeStatus(status) {
    this.status = status;
  }

  onDeleteClient() {
    this.conseillerService
      .deleteClient(this.client.id)
      .subscribe(() => this.router.navigate(["/clients"]));
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
    this.comptesEpargneStatus = this.comptesEpargne.length <= 0 ? true : false;
  }
}
