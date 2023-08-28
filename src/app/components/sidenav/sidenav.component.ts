import { Component, inject, OnInit } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import {
  cruzLogosBlack,
  cruzLogosTransparent,
  profilePicture,
} from "src/app/shared/ImageReferences";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
  headerService: HeaderService = inject(HeaderService);

  cruzLogoTransparent: string = cruzLogosTransparent;

  //currentId location
  currentLocation: string = location.hash.split("#")[1];

  activeLinkUnderline: string = "";

  activeLinks: BehaviorSubject<string> = new BehaviorSubject<string>("");

  activeLink(link: string): void {
    // this.currentLocation = link.toLowerCase();
    const line = link.toLocaleLowerCase();

    line === "about"
      ? (this.activeLinkUnderline = "20px")
      : line === "projects"
      ? (this.activeLinkUnderline = "46px")
      : line === "contact"
      ? (this.activeLinkUnderline = "74px")
      : line === "blog"
      ? (this.activeLinkUnderline = "102px")
      : 0;
  }
}
