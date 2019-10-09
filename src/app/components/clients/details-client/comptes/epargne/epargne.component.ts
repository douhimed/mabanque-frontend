import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { Compte } from "./../../../../../models/compte.model";

@Component({
  selector: "app-epargne",
  templateUrl: "./epargne.component.html",
  styleUrls: ["./epargne.component.css"]
})
export class EpargneComponent implements OnInit {
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
