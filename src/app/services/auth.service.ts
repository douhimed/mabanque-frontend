import { Injectable } from "@angular/core";
import { Employe } from "./../models/employe.model";
import { HttpClient } from "@angular/common/http";
import { environment } from "./../../environments/environment.prod";
import { User } from "./../models/user.model";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  gerant: boolean;
  mainRouter = "/clients";

  constructor(private http: HttpClient, private router: Router) {}

  getUserId() {
    return parseInt(sessionStorage.getItem("x-auth-id"));
  }

  isGerant() {
    return this.gerant;
  }

  authenticationHandler(user) {
    return this.http.post(environment.url + "/authenticate", user).subscribe(
      resp => {
        sessionStorage.setItem("x-auth-token", "Bearer " + resp["token"]);
        sessionStorage.setItem("x-auth-id", resp["idUser"]);
        this.gerant = resp["gerant"];
        if (this.gerant) this.mainRouter = "/employes";
        this.router.navigate([this.mainRouter]);
      },
      err => console.log(err.message)
    );
  }

  isAuthenticated() {
    let token = sessionStorage.getItem("x-auth-token");
    return !(token === null);
  }

  getToken() {
    if (this.isAuthenticated()) return sessionStorage.getItem("x-auth-token");
    return null;
  }

  logout() {
    sessionStorage.removeItem("x-auth-token");
    sessionStorage.removeItem("x-auth-id");
    this.gerant = null;
  }
}
