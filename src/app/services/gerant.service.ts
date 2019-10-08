import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Employe } from "../models/employe.model";

@Injectable({
  providedIn: "root"
})
export class GerantService {
  constructor(private http: HttpClient) {}

  getAgentByGerant(idGerant: number) {
    const headers = new HttpHeaders({ "id-user": idGerant.toString() });
    return this.http.get(environment.url + "/gerants", { headers: headers });
  }

  deleteEmploye(id) {
    return this.http.delete(environment.url + "/employes/" + id);
  }

  addEmploye(employe: Employe, idGerant: number) {
    const headers = new HttpHeaders({ "id-user": idGerant.toString() });
    return this.http.post(environment.url + "/employes", employe, {
      headers: headers
    });
  }
}
