import { Component, OnInit } from "@angular/core";
import { Employe } from "./../../../models/employe.model";
import { GerantService } from "src/app/services/gerant.service";
import { AuthService } from "./../../../services/auth.service";
import { Client } from "src/app/models/client.model";
import { ConseillerService } from "./../../../services/conseiller.service";
import { Router } from "@angular/router";

@Component({
  selector: "app-add-client",
  templateUrl: "./add-client.component.html",
  styleUrls: ["./add-client.component.css"]
})
export class AddClientComponent implements OnInit {
  client: Client = new Client();
  conseillers: Employe[] = [];

  constructor(
    private gerantService: GerantService,
    private authSrevice: AuthService,
    private conseillerService: ConseillerService,
    private router: Router
  ) {}

  ngOnInit() {
    this.gerantService
      .getAgentByGerant()
      .subscribe(
        resp =>
          (this.conseillers = resp["employes"].filter(
            emp => emp["id"] !== this.authSrevice.getUserId()
          ))
      );
  }

  onAddClient() {
    if (!this.authSrevice.isGerant())
      this.client.conseillerID = this.authSrevice.getUserId();
    console.log(this.client);

    this.conseillerService
      .addClient(this.client)
      .subscribe(resp => this.router.navigate(["/clients/" + resp["id"]]));
  }
}
