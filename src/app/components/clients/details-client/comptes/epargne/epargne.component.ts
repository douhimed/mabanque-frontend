import { Component, OnInit, Input } from "@angular/core";
import { Compte } from "./../../../../../models/compte.model";

@Component({
  selector: "app-epargne",
  templateUrl: "./epargne.component.html",
  styleUrls: ["./epargne.component.css"]
})
export class EpargneComponent implements OnInit {
  @Input() comptes: Compte[] = [];
  constructor() {}

  ngOnInit() {}
}
