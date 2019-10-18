import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Compte } from "src/app/models/compte.model";
import { ConseillerService } from "./../../../../../services/conseiller.service";

@Component({
  selector: "app-courant",
  templateUrl: "./courant.component.html",
  styleUrls: ["./courant.component.css"]
})
export class CourantComponent implements OnInit {
  @Input() comptes: Compte[] = [];
  @Output() onAddOperation = new EventEmitter<any>();

  constructor(private conseillServices: ConseillerService) {}

  ngOnInit() {}

  onVerser(idCompte: number, section: string) {
    this.onAddOperation.emit({ type: "verser", compteOne: idCompte, section });
  }

  updateCarteType(compte: Compte) {
    compte.type = "cc";
    this.conseillServices
      .updateCompte(compte)
      .subscribe(resp => console.log(resp), err => console.log(err));
  }

  onRetirer(idCompte: number, section: string) {
    this.onAddOperation.emit({
      type: "retirait",
      compteOne: idCompte,
      section
    });
  }
}
