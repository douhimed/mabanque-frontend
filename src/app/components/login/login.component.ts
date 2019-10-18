import { Component, OnInit } from "@angular/core";
import { AuthService } from "./../../services/auth.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  error: boolean = false;
  message: string = null;

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit() {}

  onLogin(user: { username: string; password: string }) {
    this.authService.authenticationHandler(user).subscribe(
      resp => {
        this.authService.storeSession(resp);
        let mainRouter = "/clients";
        if (resp["gerant"]) mainRouter = "/dashboard";
        this.router.navigate([mainRouter]);
      },
      err => {
        this.message = "Login/Mot de passe est incorrect";
      }
    );
  }
}
