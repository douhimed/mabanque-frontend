import { Component, OnInit } from "@angular/core";
import { GerantService } from "src/app/services/gerant.service";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-employes",
  templateUrl: "./employes.component.html",
  styleUrls: ["./employes.component.css"]
})
export class EmployesComponent implements OnInit {
  employes: any[] = [];

  constructor(
    private gerantService: GerantService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchEmployes();
  }

  onDeleteEmploye(id) {
    this.gerantService.deleteEmploye(id).subscribe(() => this.fetchEmployes());
  }

  fetchEmployes() {
    this.gerantService
      .getAgentByGerant()
      .subscribe(resp => (this.employes = resp["employes"]));
  }
}
