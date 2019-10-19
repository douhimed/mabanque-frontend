import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Compte } from "./../../../../models/compte.model";
import { ConseillerService } from "./../../../../services/conseiller.service";
import { Operation } from "src/app/models/operation.model";
import { Router } from "@angular/router";
import { AuthService } from "./../../../../services/auth.service";

@Component({
  selector: "app-comptes",
  templateUrl: "./comptes.component.html",
  styleUrls: ["./comptes.component.css"]
})
export class ComptesComponent implements OnInit {
  @Input() comptes: Compte[];
  @Input("cc") comptesCourant: Compte[];
  @Input("ce") comptesEpargne: Compte[];
  @Input() status: string = "comptes";
  @Input() clientID: number = 0;
  @Output() onSaveCompte = new EventEmitter<boolean>();
  operation: Operation = new Operation();
  operationInfos = { section: "" };
  message: string = null;

  constructor(
    private conseillerService: ConseillerService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onAddedCompte(status: boolean) {
    this.onSaveCompte.emit(status);
  }

  onSavingOperation(operation: any) {
    this.operationInfos = { ...operation };
    this.operationInfos["conseillerID"] = this.authService.getUserId();
  }

  afterSavingOperation() {
    this.conseillerService.addOperation(this.operationInfos).subscribe(
      resp => {
        this.status = "comptes";
        this.operationInfos.section = "";
        this.router.navigate(["/comptes/" + resp["id"]]);
      },
      err => {
        this.message = err.error.message;
      }
    );
  }
}
