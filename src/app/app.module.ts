import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { EmployesComponent } from "./components/employes/employes.component";
import { HeaderComponent } from "./components/header/header.component";
import { AddEmployeComponent } from './components/employes/add-employe/add-employe.component';
import { EditEmployeComponent } from './components/employes/edit-employe/edit-employe.component';
import { DetailsEmployeComponent } from './components/employes/details-employe/details-employe.component';
import { DetailsClientComponent } from './components/clients/details-client/details-client.component';
import { ClientsComponent } from './components/clients/clients.component';
import { ComptesComponent } from './components/clients/details-client/comptes/comptes.component';
import { AddCompteComponent } from './components/clients/details-client/comptes/add-compte/add-compte.component';
import { OperationsComponent } from './components/clients/details-client/comptes/operations/operations.component';

@NgModule({
  declarations: [AppComponent, EmployesComponent, HeaderComponent, AddEmployeComponent, EditEmployeComponent, DetailsEmployeComponent, DetailsClientComponent, ClientsComponent, ComptesComponent, AddCompteComponent, OperationsComponent],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule, FormsModule],
  providers: [,],
  bootstrap: [AppComponent]
})
export class AppModule {}
