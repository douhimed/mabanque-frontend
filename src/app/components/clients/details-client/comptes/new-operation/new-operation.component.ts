import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { Operation } from "src/app/models/operation.model";

@Component({
  selector: "app-new-operation",
  templateUrl: "./new-operation.component.html",
  styleUrls: ["./new-operation.component.css"]
})
export class NewOperationComponent implements OnInit {
  @Input("infos") operationData: Operation = new Operation();
  @Output() onAddedOperation = new EventEmitter<void>();

  constructor() {}

  ngOnInit() {}

  onSaveOperation() {
    this.onAddedOperation.emit();
  }
}
