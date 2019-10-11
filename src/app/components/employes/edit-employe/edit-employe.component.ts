import { Component, OnInit } from "@angular/core";
import { Employe } from "src/app/models/employe.model";
import { ActivatedRoute, Router } from "@angular/router";
import { GerantService } from "src/app/services/gerant.service";
import { ConseillerService } from "./../../../services/conseiller.service";

@Component({
  selector: "app-edit-employe",
  templateUrl: "./edit-employe.component.html",
  styleUrls: ["./edit-employe.component.css"]
})
export class EditEmployeComponent implements OnInit {
  employe: Employe = new Employe("", "");

  constructor(
    public route: ActivatedRoute,
    private router: Router,
    private conseillerService: ConseillerService
  ) {}

  ngOnInit() {
    this.employe.id = this.route.snapshot.params["id"];
    this.conseillerService.getEmploye(this.employe.id).subscribe(resp => {
      this.employe.nom = resp["nom"];
      this.employe.prenom = resp["prenom"];
      this.employe.username = resp["username"];
    });
  }

  onUpdateEmploye() {
    this.conseillerService.updateEmploye(this.employe).subscribe(() => {
      this.employe.nom = "";
      this.employe.prenom = "";
      this.router.navigate(["/"]);
    });
  }
}
