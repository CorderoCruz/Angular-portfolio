import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ChildActivationStart } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  cruzLogosTransparent,
  profilePicture,
} from "src/app/shared/ImageReferences";
import { AboutService } from "src/app/shared/services/about.service";
import { HeaderService } from "src/app/shared/services/header.service";
import { LoadingActions } from "src/app/store/shared/loading/loading.actions";
import { selectPageStatus } from "src/app/store/shared/loading/loading.selector";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  constructor(private store: Store) {}
  @ViewChild("main")
  main: ElementRef;

  backgroundColor: string = "";
  imageSrc: string = cruzLogosTransparent;
  linkColor: string = "black";
  menu: string = "black";
  boxShadow: boolean = false;

  //getting the width of the users device
  deviceWidth: number =
    window.innerWidth > 0 ? window.innerWidth : screen.width;

  profilePicture: string = profilePicture;

  loading$ = this.store.select(selectPageStatus);

  onScroll() {
    const mainTop: number = this.main.nativeElement.getBoundingClientRect().top;

    //if the screen size is larger
    if (this.deviceWidth >= 900) {
      if (mainTop <= 138) {
        this.backgroundColor = "white";
        this.boxShadow = true;
      }
      if (mainTop > 138) {
        this.backgroundColor = "transparent";
        this.boxShadow = false;
      }
    }

    //if the screen size is smaller
    if (this.deviceWidth < 900) {
      if (mainTop < 138) {
        this.backgroundColor = "white";
        this.boxShadow = true;
      }
      if (mainTop >= 138) {
        this.backgroundColor = "transparent";
        this.boxShadow = false;
      }
    }
  }

  ngOnInit(): void {
    this.store.dispatch(LoadingActions.loadPageRequest({ status: true }));
  }
}
