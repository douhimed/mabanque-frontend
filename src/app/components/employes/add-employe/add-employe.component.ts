import { Component, OnInit } from "@angular/core";
import { GerantService } from "src/app/services/gerant.service";
import { Employe } from "./../../../models/employe.model";
import { Router } from "@angular/router";
import { AuthService } from "./../../../services/auth.service";

@Component({
  selector: "app-add-employe",
  templateUrl: "./add-employe.component.html",
  styleUrls: ["./add-employe.component.css"]
})
export class AddEmployeComponent implements OnInit {
  employe: Employe = new Employe("", "");

  constructor(
    private gerantService: GerantService,
    private router: Router,
    private authService: AuthService
  ) {}

  ngOnInit() {}

  onAddEmploye() {
    this.gerantService
      .addEmploye(this.employe, this.authService.getUserId())
      .subscribe(() => this.router.navigate(["/"]));
  }
}
