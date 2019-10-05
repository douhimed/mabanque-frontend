import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"]
})
export class AppComponent {
  title = "mabanque-frontend";
  loadedFeature: string = "employes";

  onNavigate(selectedFeature) {
    this.loadedFeature = selectedFeature;
  }
}
