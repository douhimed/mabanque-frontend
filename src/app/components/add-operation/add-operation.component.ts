import { Component, OnInit, OnChanges } from "@angular/core";
import { Operation } from "src/app/models/operation.model";
import { Router } from "@angular/router";
import { ConseillerService } from "./../../services/conseiller.service";
import { Employe } from "src/app/models/employe.model";
import { GerantService } from "./../../services/gerant.service";
import { AuthService } from "src/app/services/auth.service";
import { Compte } from "./../../models/compte.model";

@Component({
  selector: "app-add-operation",
  templateUrl: "./add-operation.component.html",
  styleUrls: ["./add-operation.component.css"]
})
export class AddOperationComponent implements OnInit {
  operation: Operation = new Operation();
  comptesOne: Compte[] = [];
  comptesTwo: Compte[] = [];
  disabledCompteTwo: boolean = true;
  disabledMontant: boolean = true;
  message: string = null;

  constructor(
    private router: Router,
    private conseillerService: ConseillerService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchClientsByEmploye();
  }

  onChoiceCompteOne(): void {
    this.comptesTwo = this.comptesOne.filter(
      compte => compte.id != this.operation.compteOne
    );
    this.disabledCompteTwo = false;
  }

  fetchClientsByEmploye() {
    this.conseillerService
      .getEmploye(this.authService.getUserId())
      .subscribe(resp => {
        resp["clients"].forEach(client => {
          this.comptesOne = this.comptesOne.concat(client["comptes"]);
        });
      });
  }

  onChoiceCompteTwo() {
    this.disabledMontant = false;
  }

  onAddOperation() {
    this.operation.type = "virement";
    this.operation.conseillerID = this.authService.getUserId();
    this.conseillerService
      .addOperation(this.operation)
      .subscribe(
        resp => this.router.navigate(["comptes/" + resp["id"]]),
        err => (this.message = err.error.message)
      );
  }
}
