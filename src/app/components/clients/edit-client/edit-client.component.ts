import { Component, OnInit } from "@angular/core";
import { Client } from "src/app/models/client.model";
import { ActivatedRoute, Router } from "@angular/router";
import { ConseillerService } from "./../../../services/conseiller.service";
import { Employe } from "src/app/models/employe.model";
import { AuthService } from "src/app/services/auth.service";
import { GerantService } from "src/app/services/gerant.service";

@Component({
  selector: "app-edit-client",
  templateUrl: "./edit-client.component.html",
  styleUrls: ["./edit-client.component.css"]
})
export class EditClientComponent implements OnInit {
  client: Client = new Client();
  conseillers: Employe[] = [];

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private conseillerService: ConseillerService,
    private authSrevice: AuthService,
    private gerantService: GerantService
  ) {}

  ngOnInit() {
    this.fetchConseillers();
    this.fetchClient();
  }

  private fetchClient() {
    this.conseillerService
      .getClient(this.route.snapshot.params["id"])
      .subscribe(resp => {
        {
          this.client = resp;
          this.client.conseillerID = resp["conseiller"]["id"];
        }
      });
  }

  private fetchConseillers() {
    this.gerantService
      .getAgentByGerant(this.authSrevice.getUserId())
      .subscribe(
        resp =>
          (this.conseillers = resp["employes"].filter(
            emp => emp["id"] !== this.authSrevice.getUserId()
          ))
      );
  }

  onUpdateClient() {
    this.conseillerService
      .updateClient(this.client)
      .subscribe(resp =>
        resp ? this.router.navigate(["/clients/" + resp["id"]]) : null
      );
  }
}
