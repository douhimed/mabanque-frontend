import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Compte } from "./../../../../models/compte.model";

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

  constructor() {}

  ngOnInit() {}

  onAddedCompte(status: boolean) {
    this.onSaveCompte.emit(status);
  }
}
