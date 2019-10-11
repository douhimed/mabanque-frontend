import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin(user: { username: string; password: string }) {
    this.authService.authenticationHandler(user);
  }
}
