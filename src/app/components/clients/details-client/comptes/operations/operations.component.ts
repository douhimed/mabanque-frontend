import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConseillerService } from "./../../../../../services/conseiller.service";
import { Compte } from "./../../../../../models/compte.model";

@Component({
  selector: "app-operations",
  templateUrl: "./operations.component.html",
  styleUrls: ["./operations.component.css"]
})
export class OperationsComponent implements OnInit {
  compte: Compte = new Compte();
  isCourant: boolean = true;

  constructor(
    private route: ActivatedRoute,
    private conseillerService: ConseillerService
  ) {}

  ngOnInit() {
    this.conseillerService
      .getCompte(this.route.snapshot.params["id"])
      .subscribe(resp => {
        this.compte = resp;
        if (this.compte["taux"]) this.isCourant = false;
      });
  }
}
