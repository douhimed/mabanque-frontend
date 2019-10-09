import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Compte } from "src/app/models/compte.model";

@Component({
  selector: "app-courant",
  templateUrl: "./courant.component.html",
  styleUrls: ["./courant.component.css"]
})
export class CourantComponent implements OnInit {
  @Input() comptes: Compte[] = [];
  @Output() onAddOperation = new EventEmitter<any>();

  constructor() {}

  ngOnInit() {}

  onVerser(idCompte: number, section: string) {
    this.onAddOperation.emit({ type: "verser", compteOne: idCompte, section });
  }

  onRetirer(idCompte: number, section: string) {
    this.onAddOperation.emit({
      type: "retirait",
      compteOne: idCompte,
      section
    });
  }
}
