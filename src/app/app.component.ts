import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { LoadingActions } from "./store/shared/loading/loading.actions";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent implements OnInit {
  title = "portfolio";

  constructor(private store: Store) {}

  ngOnInit(): void {}
}
