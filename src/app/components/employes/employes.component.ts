import { Component, OnInit } from "@angular/core";
import { GerantService } from "src/app/services/gerant.service";
import { AuthService } from "./../../services/auth.service";

@Component({
  selector: "app-employes",
  templateUrl: "./employes.component.html",
  styleUrls: ["./employes.component.css"]
})
export class EmployesComponent implements OnInit {
  employes: any = null;
  message: string = "";
  disabled: boolean = false;
  disabledDelete: boolean = false;

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
        this.employes = resp;
        if (this.employes.length <= 0) {
          this.message = "Ce gérant ne gére aucun conseiller";
        } else {
          if (this.employes.length >= 10) this.disabled = true;
        }
      });
  }
}
