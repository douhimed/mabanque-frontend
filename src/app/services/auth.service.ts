import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  idUser: number = 3;
  gerant: boolean = false;

  constructor() {}

  getUserId() {
    return this.idUser;
  }

  isGerant() {
    return this.gerant;
  }
}
