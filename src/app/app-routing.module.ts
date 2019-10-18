import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { EmployesComponent } from "./components/employes/employes.component";
import { AddEmployeComponent } from "./components/employes/add-employe/add-employe.component";
import { EditEmployeComponent } from "./components/employes/edit-employe/edit-employe.component";
import { DetailsEmployeComponent } from "./components/employes/details-employe/details-employe.component";
import { DetailsClientComponent } from "./components/clients/details-client/details-client.component";
import { ClientsComponent } from "./components/clients/clients.component";
import { OperationsComponent } from "./components/clients/details-client/comptes/operations/operations.component";
import { AddClientComponent } from "./components/clients/add-client/add-client.component";
import { EditClientComponent } from "./components/clients/edit-client/edit-client.component";
import { AddOperationComponent } from "./components/add-operation/add-operation.component";
import { LoginComponent } from "./components/login/login.component";
import { LogoutComponent } from "./components/logout/logout.component";
import { AuthGuard } from "./guards/auth.guard";
import { AnonymGuard } from "./guards/anonym.guard";
import { isGerantGuard } from "./guards/is-gerant.guard";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DashboardComponent } from "./components/dashboard/dashboard.component";

const routes: Routes = [
  {
    path: "",
    component: LoginComponent
  },
  {
    path: "employes/new",
    component: AddEmployeComponent,
    canActivate: [AuthGuard, isGerantGuard]
  },
  {
    path: "employes/:id/edit",
    component: EditEmployeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employes/:id",
    component: DetailsEmployeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "employes",
    component: EmployesComponent,
    canActivate: [AuthGuard, isGerantGuard]
  },
  {
    path: "clients/new",
    component: AddClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "clients/:id/edit",
    component: EditClientComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "clients/:id",
    component: DetailsClientComponent,
    canActivate: [AuthGuard]
  },
  { path: "clients", component: ClientsComponent, canActivate: [AuthGuard] },
  {
    path: "comptes/:id",
    component: OperationsComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "operations",
    component: AddOperationComponent,
    canActivate: [AuthGuard]
  },
  {
    path: "dashboard",
    component: DashboardComponent,
    canActivate: [AuthGuard, isGerantGuard]
  },
  { path: "login", component: LoginComponent, canActivate: [AnonymGuard] },
  { path: "logout", component: LogoutComponent },
  { path: "404", component: NotFoundComponent },
  { path: "**", redirectTo: "/404" }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
