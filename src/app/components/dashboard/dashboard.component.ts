import { Component, OnInit } from "@angular/core";
import { GerantService } from "src/app/services/gerant.service";
import { AuthService } from "./../../services/auth.service";
import { Employe } from "src/app/models/employe.model";
import { Operation } from "src/app/models/operation.model";

@Component({
  selector: "app-dashboard",
  templateUrl: "./dashboard.component.html",
  styleUrls: ["./dashboard.component.css"]
})
export class DashboardComponent implements OnInit {
  agence: any = {};
  compte: any = {};
  employes: any[] = null;
  clients: any[] = null;
  user: Employe = new Employe();
  operations: Operation[] = [];

  constructor(
    private gerantService: GerantService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.clean();
    this.gerantService
      .getFullAgentByGerant(this.authService.getUserId())
      .subscribe(resp => {
        console.log(resp);
        this.agence = resp;
        this.compte = resp["compte"];
        this.employes = resp["employes"];
        this.employes.forEach(employe => {
          if (employe["clients"])
            this.clients = this.clients.concat(employe["clients"]);
          if (employe["id"] === this.authService.getUserId())
            this.user = employe;
        });
      });
  }

  clean() {
    this.agence = {};
    this.compte = {};
    this.employes = [];
    this.clients = [];
    this.user = new Employe();
    this.operations = [];
  }
}
