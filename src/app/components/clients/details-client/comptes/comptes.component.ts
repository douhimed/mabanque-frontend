import { Component, OnInit, Input, OnChanges } from "@angular/core";
import { Compte } from "./../../../../models/compte.model";

@Component({
  selector: "app-comptes",
  templateUrl: "./comptes.component.html",
  styleUrls: ["./comptes.component.css"]
})
export class ComptesComponent implements OnInit, OnChanges {
  @Input() comptes: Compte[];
  @Input("cc") comptesCourant: Compte[];
  @Input("ce") comptesEpargne: Compte[];

  constructor() {}

  ngOnInit() {}

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {}
}
