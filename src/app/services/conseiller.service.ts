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
    const headers = new HttpHeaders({
      "id-client": id.toString(),
      Authorization: this.auth.getToken()
    });
    return this.http.delete(environment.url + "/clients", { headers: headers });
  }

  getEmploye(id: number) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.get(environment.url + "/employes/" + id, { headers });
  }

  updateEmploye(employe: Employe) {
    let idGerant = this.auth.isGerant() ? this.auth.getUserId().toString() : 0;
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken(),
      "id-user": idGerant.toString()
    });
    return this.http.put(environment.url + "/employes", employe, { headers });
  }

  getClients() {
    const headers = new HttpHeaders({
      "id-user": this.auth.getUserId().toString(),
      Authorization: this.auth.getToken()
    });
    return this.http.get(environment.url + "/clients", { headers });
  }

  getClient(id: number) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.get(environment.url + "/clients/" + id, { headers });
  }

  addClient(client: Client) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.post(environment.url + "/clients", client, { headers });
  }

  getCompte(id: number) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.get(environment.url + "/comptes/" + id, { headers });
  }

  addCompte(compte: Compte) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.post(environment.url + "/comptes", compte, { headers });
  }

  updateClient(client: Client) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.put(environment.url + "/clients", client, { headers });
  }

  deleteCompte(id: number) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.delete(environment.url + "/comptes/" + id, { headers });
  }

  addOperation(operationInfos) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.post(environment.url + "/operations", operationInfos, {
      headers
    });
  }

  updateCompte(compte: Compte) {
    const headers = new HttpHeaders({
      Authorization: this.auth.getToken()
    });
    return this.http.put(environment.url + "/comptes", compte, { headers });
  }
}
