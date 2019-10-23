import { Component, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { ConseillerService } from "./../../../services/conseiller.service";
import { Employe } from "src/app/models/employe.model";

@Component({
  selector: "app-details-employe",
  templateUrl: "./details-employe.component.html",
  styleUrls: ["./details-employe.component.css"]
})
export class DetailsEmployeComponent implements OnInit {
  clients: any;
  employe: Employe = new Employe("", "");
  id: number;
  message: string = null;
  constructor(
    private route: ActivatedRoute,
    private conseillerService: ConseillerService
  ) {}

  ngOnInit() {
    this.conseillerService
      .getEmploye(this.route.snapshot.params["id"])
      .subscribe(
        resp => {
          this.employe = new Employe(resp["nom"], resp["prenom"]);
          if (resp["clients"].length > 0) {
            this.clients = resp["clients"];
          } else this.message = "Cet employé ne gére aucun client";
        },
        err => console.log(err.error.message)
      );
  }
}
