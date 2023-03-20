import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  landingBackground,
  cruzLogosWhite,
} from "src/app/shared/ImageReferences";
import { HeaderService } from "src/app/shared/services/header.service";
import { LoadingActions } from "src/app/store/shared/loading/loading.actions";
import { selectPageStatus } from "src/app/store/shared/loading/loading.selector";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent implements OnInit {
  constructor(private store: Store, private headerService: HeaderService) {}

  backgroundColor: string = "rgba(0,  0, 0 , .3)";
  imageSrc: string = cruzLogosWhite;
  linkColor: string = "white";
  landingBackground: string = landingBackground;
  boxShadow: boolean = true;
  menu: string = "white";

  loading$ = this.store.select(selectPageStatus);

  ngOnInit(): void {
    this.store.dispatch(LoadingActions.loadPageRequest({ status: true }));
  }
}
