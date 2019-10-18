import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { EmployesComponent } from "./components/employes/employes.component";
import { HeaderComponent } from "./components/header/header.component";
import { AddEmployeComponent } from "./components/employes/add-employe/add-employe.component";
import { EditEmployeComponent } from "./components/employes/edit-employe/edit-employe.component";
import { DetailsEmployeComponent } from "./components/employes/details-employe/details-employe.component";
import { DetailsClientComponent } from "./components/clients/details-client/details-client.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { ComptesComponent } from "./components/clients/details-client/comptes/comptes.component";
import { AddCompteComponent } from "./components/clients/details-client/comptes/add-compte/add-compte.component";
import { OperationsComponent } from "./components/clients/details-client/comptes/operations/operations.component";
import { AddClientComponent } from "./components/clients/add-client/add-client.component";
import { CourantComponent } from "./components/clients/details-client/comptes/courant/courant.component";
import { EpargneComponent } from "./components/clients/details-client/comptes/epargne/epargne.component";
import { EditClientComponent } from "./components/clients/edit-client/edit-client.component";
import { AddOperationComponent } from "./components/add-operation/add-operation.component";
import { NewOperationComponent } from "./components/clients/details-client/comptes/new-operation/new-operation.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { AuthGuard } from "./guards/auth.guard";
import { GerantService } from "./services/gerant.service";
import { ConseillerService } from "./services/conseiller.service";
import { isGerantGuard } from "./guards/is-gerant.guard";
import { UnauthorizedComponent } from "./components/unauthorized/unauthorized.component";
import { AnonymGuard } from "./guards/anonym.guard";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

@NgModule({
  declarations: [
    AppComponent,
    EmployesComponent,
    HeaderComponent,
    AddEmployeComponent,
    EditEmployeComponent,
    DetailsEmployeComponent,
    DetailsClientComponent,
    ClientsComponent,
    ComptesComponent,
    AddCompteComponent,
    OperationsComponent,
    AddClientComponent,
    CourantComponent,
    EpargneComponent,
    EditClientComponent,
    AddOperationComponent,
    NewOperationComponent,
    LoginComponent,
    LogoutComponent,
    UnauthorizedComponent,
    NotFoundComponent,
    DashboardComponent
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],

  providers: [
    GerantService,
    ConseillerService,
    AuthGuard,
    isGerantGuard,
    AnonymGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
