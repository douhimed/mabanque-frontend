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
  message: string = "";

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
    console.log("isAuthenticated : ", this.authService.isAuthenticated());
    this.gerantService
      .getAgentByGerant(this.authService.getUserId())
      .subscribe(resp => {
        if (resp["employes"].length <= 1) {
          this.message = "Cette agence est en cours de création";
        } else {
          this.employes = resp["employes"].filter(
            emp => emp["id"] !== this.authService.getUserId()
          );
        }
      });
  }
}
