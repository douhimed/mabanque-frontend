import { Component, OnInit } from "@angular/core";
import { ConseillerService } from "./../../services/conseiller.service";
import { AuthService } from "./../../services/auth.service";
import { GerantService } from "src/app/services/gerant.service";
import { Client } from "src/app/models/client.model";
import { Employe } from "src/app/models/employe.model";

@Component({
  selector: "app-clients",
  templateUrl: "./clients.component.html",
  styleUrls: ["./clients.component.css"]
})
export class ClientsComponent implements OnInit {
  clients: Client[] = [];
  disabled: boolean = false;
  message: string = null;
  user: Employe = new Employe();

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
    else this.fetchClientsByEmploye();
  }

  fetchClientsByEmploye() {
    this.conseillerService
      .getEmploye(this.authService.getUserId())
      .subscribe(resp => {
        this.user.nom = resp["nom"];
        this.user.prenom = resp["prenom"];
        this.clients = resp["clients"];
        if (!this.authService.isGerant() && this.clients.length >= 5)
          this.disabled = true;
        if (this.clients.length <= 0)
          this.message = "Ce conseiller ne gére aucun client";
      });
  }

  fetchAllClients() {
    this.gerantService.getClientsByAgence().subscribe(resp => {
      resp["employes"].forEach(employe => {
        if (employe["id"] !== this.authService.getUserId())
          this.clients = this.clients.concat(employe["clients"]);
      });
      if (this.clients.length <= 0)
        this.message = "Cette agence n'a aucun client";
    });
  }
}
