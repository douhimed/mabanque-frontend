import { Component, OnInit, Input } from "@angular/core";
import { Compte } from "src/app/models/compte.model";

@Component({
  selector: "app-courant",
  templateUrl: "./courant.component.html",
  styleUrls: ["./courant.component.css"]
})
export class CourantComponent implements OnInit {
  @Input() comptes: Compte[] = [];

  constructor() {}

  ngOnInit() {}
}
