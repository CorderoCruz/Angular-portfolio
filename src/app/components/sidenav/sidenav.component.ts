import { Component, OnInit } from "@angular/core";
import {
  cruzLogosBlack,
  cruzLogosTransparent,
  profilePicture,
} from "src/app/shared/ImageReferences";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent implements OnInit {
  cruzLogoTransparent: string = cruzLogosTransparent;

  //currentId location
  currentLocation: string = location.hash.split("#")[1];

  activeLinkUnderline: string = "";

  activeLink(link: string): void {
    // this.currentLocation = link.toLowerCase();
    const line = link.toLocaleLowerCase();

    line === "projects"
      ? (this.activeLinkUnderline = "20px")
      : line === "about"
      ? (this.activeLinkUnderline = "46px")
      : line === "contact"
      ? (this.activeLinkUnderline = "74px")
      : line === "blog"
      ? (this.activeLinkUnderline = "102px")
      : 0;
  }

  ngOnInit(): void {}
}
