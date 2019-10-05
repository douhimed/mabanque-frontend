import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployesComponent } from "./components/employes/employes.component";
import { AddEmployeComponent } from "./components/employes/add-employe/add-employe.component";
import { EditEmployeComponent } from "./components/employes/edit-employe/edit-employe.component";
import { DetailsEmployeComponent } from "./components/employes/details-employe/details-employe.component";
import { DetailsClientComponent } from "./components/clients/details-client/details-client.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { OperationsComponent } from "./components/clients/details-client/comptes/operations/operations.component";

const routes: Routes = [
  { path: "", component: EmployesComponent },
  { path: "employes/new", component: AddEmployeComponent },
  { path: "employes/:id/edit", component: EditEmployeComponent },
  { path: "employes/:id", component: DetailsEmployeComponent },
  { path: "clients/:id", component: DetailsClientComponent },
  { path: "clients", component: ClientsComponent },
  { path: "comptes/:id", component: OperationsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
