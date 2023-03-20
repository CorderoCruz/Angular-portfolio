import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { cruzLogosTransparent } from "src/app/shared/ImageReferences";
import { LoadingActions } from "src/app/store/shared/loading/loading.actions";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  backgroundColor: string = "transperent";
  imageSrc: string = cruzLogosTransparent;
  linkColor: string = "black";

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.store.dispatch(LoadingActions.loadPageRequest({ status: true }));
  }
}
