import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class AuthService {
  idUser: number = 8;
  gerant: boolean = true;

  constructor() {}

  getUserId() {
    return this.idUser;
  }

  isGerant() {
    return this.gerant;
  }
}
