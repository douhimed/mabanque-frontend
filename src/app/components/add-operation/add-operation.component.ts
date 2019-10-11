import { Component, OnInit } from "@angular/core";
import { Operation } from "src/app/models/operation.model";
import { Router } from "@angular/router";
import { ConseillerService } from "./../../services/conseiller.service";

@Component({
  selector: "app-add-operation",
  templateUrl: "./add-operation.component.html",
  styleUrls: ["./add-operation.component.css"]
})
export class AddOperationComponent implements OnInit {
  operation: Operation = new Operation();

  constructor(
    private router: Router,
    private conseillerService: ConseillerService
  ) {}

  ngOnInit() {}

  onAddOperation() {
    this.operation.type = "verment";
    console.log(this.operation);

    /*this.conseillerService
      .addOperation(this.operation)
      .subscribe(resp => this.router.navigate(["comptes/" + resp["id"]]));*/
  }
}
