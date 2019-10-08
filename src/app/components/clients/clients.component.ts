import { Component, OnInit } from "@angular/core";
import { ConseillerService } from "./../../services/conseiller.service";
import { AuthService } from "./../../services/auth.service";
import { GerantService } from "src/app/services/gerant.service";
import { Client } from "src/app/models/client.model";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];

  constructor(
    private conseillerService: ConseillerService,
    private gerantService: GerantService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchClients();
  }

  onDeleteClient(id) {
    this.conseillerService.deleteClient(id).subscribe(() => {
      this.clients = [];
      this.fetchClients();
    });
  }

  fetchClients() {
    if (this.authService.isGerant()) this.fetchAllClients();
    else this.fetchCliantsByConseiller();
  }

  fetchCliantsByConseiller() {
    this.conseillerService
      .getEmploye(this.authService.getUserId())
      .subscribe(resp => (this.clients = resp["clients"]));
  }

  fetchAllClients() {
    this.gerantService
      .getAgentByGerant(this.authService.getUserId())
      .subscribe(resp => {
        resp["employes"].forEach(employe => {
          if (employe["id"] !== this.authService.getUserId())
            this.clients = this.clients.concat(employe["clients"]);
        });
      });
  }
}
