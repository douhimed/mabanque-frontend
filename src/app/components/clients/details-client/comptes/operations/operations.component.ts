import { Component, OnInit, Input } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { ConseillerService } from "./../../../../../services/conseiller.service";
import { Compte } from "./../../../../../models/compte.model";

@Component({
  selector: "app-operations",
  templateUrl: "./operations.component.html",
  styleUrls: ["./operations.component.css"]
})
export class OperationsComponent implements OnInit {
  compte: Compte = new Compte();
  isCourant: boolean = false;
  idClient: number;
  message: string = null;

  constructor(
    private route: ActivatedRoute,
    private conseillerService: ConseillerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.conseillerService
      .getCompte(this.route.snapshot.params["id"])
      .subscribe(resp => {
        this.compte = resp;
        this.idClient = resp["client"]["id"];
        if (this.compte["operations"].length <= 0)
          this.message = "Ce compte a aucun opération";
        else {
          if (resp["taux"] <= 0) this.isCourant = true;
        }
      });
  }

  onDeleteCompte() {
    this.conseillerService
      .deleteCompte(this.compte.id)
      .subscribe(() => this.router.navigate(["/clients/" + this.idClient]));
  }
}
