import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { environment } from "./../../environments/environment";
import { Employe } from "../models/employe.model";
import { AuthService } from "src/app/services/auth.service";

@Injectable({
  providedIn: "root"
})
export class GerantService {
  constructor(private http: HttpClient, private auth: AuthService) {}

  getAgentByGerant(idGerant: number) {
    const headers = new HttpHeaders({
      "id-user": idGerant.toString(),
      Authorization: this.auth.getToken()
    });

    return this.http.get(environment.url + "/gerants", { headers });
  }

  getClientsByAgence() {
    const headers = new HttpHeaders({
      "id-user": this.auth.getUserId().toString(),
      Authorization: this.auth.getToken()
    });
    return this.http.get(environment.url + "/agences", { headers });
  }

  deleteEmploye(id) {
    const headers = new HttpHeaders({
      "id-user": this.auth.getUserId().toString(),
      Authorization: this.auth.getToken()
    });

    return this.http.delete(environment.url + "/employes/" + id, { headers });
  }

  addEmploye(employe: Employe) {
    console.log(employe);

    const headers = new HttpHeaders({
      "id-user": employe.idResponsable.toString(),
      Authorization: this.auth.getToken()
    });
    return this.http.post(environment.url + "/employes", employe, { headers });
  }

  getFullAgentByGerant(idGerant: number) {
    const headers = new HttpHeaders({
      "id-user": idGerant.toString(),
      Authorization: this.auth.getToken()
    });

    return this.http.get(environment.url + "/agences", { headers });
  }
}
