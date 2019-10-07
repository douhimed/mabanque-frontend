import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment.prod";
import { Employe } from "../models/employe.model";
import { AuthService } from "./auth.service";
import { Client } from "../models/client.model";
import { Compte } from "src/app/models/compte.model";

@Injectable({
  providedIn: "root"
})
export class ConseillerService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  deleteClient(id: number) {
    return this.http.delete(environment.url + "/clients/" + id);
  }

  getEmploye(id: number) {
    return this.http.get(environment.url + "/employes/" + id);
  }

  updateEmploye(employe: Employe) {
    return this.http.put(environment.url + "/employes", employe);
  }

  getClients() {
    const headers = new HttpHeaders({
      "id-user": this.auth.getUserId().toString()
    });
    return this.http.get(environment.url + "/clients", { headers: headers });
  }

  getClient(id: number) {
    return this.http.get(environment.url + "/clients/" + id);
  }

  addClient(client: Client) {
    return this.http.post(environment.url + "/clients", client);
  }

  getCompte(id: number) {
    return this.http.get(environment.url + "/comptes/" + id);
  }

  addCompte(compte: Compte) {
    return this.http.post(environment.url + "/comptes", compte);
  }
}
