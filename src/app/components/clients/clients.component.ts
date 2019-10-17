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
  disabled: boolean = false;
  message: string = null;

  constructor(
    private conseillerService: ConseillerService,
    private gerantService: GerantService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    this.fetchClientsByEmploye();
  }

  onDeleteClient(id) {
    this.conseillerService.deleteClient(id).subscribe(() => {
      this.clients = [];
      this.fetchClients();
    });
  }

  fetchClients() {
    if (this.authService.isGerant()) this.fetchAllClients();
    else this.fetchClientsByEmploye();
  }

  fetchClientsByEmploye() {
    this.conseillerService
      .getEmploye(this.authService.getUserId())
      .subscribe(resp => {
        this.clients = resp["clients"];
        if (
          (this.authService.isGerant() && this.clients.length >= 10) ||
          (!this.authService.isGerant() && this.clients.length >= 5)
        )
          this.disabled = true;
        if (this.clients.length <= 0)
          this.message = "Cette agence a aucun client actuel";
      });
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
