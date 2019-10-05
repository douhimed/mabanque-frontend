import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Employe } from "../models/employe.model";

const headers = new HttpHeaders({ "id-user": "8" });

@Injectable({
  providedIn: "root"
})
export class GerantService {
  constructor(private http: HttpClient) {}

  getAgentByGerant() {
    return this.http.get(environment.url + "/gerants", { headers: headers });
  }

  deleteEmploye(id) {
    return this.http.delete(environment.url + "/employes/" + id);
  }

  addEmploye(employe: Employe) {
    return this.http.post(environment.url + "/employes", employe, {
      headers: headers
    });
  }
}
