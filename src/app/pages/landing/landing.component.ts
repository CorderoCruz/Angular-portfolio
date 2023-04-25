import { Component, HostListener, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import {
  cruzLogosWhite,
  profilePicture,
  cruzLogosBlack,
} from "src/app/shared/ImageReferences";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent implements OnInit {
  constructor(private store: Store, public headerService: HeaderService) {}
  cruzLogoWhite: string = cruzLogosWhite;
  profilePicture: string = profilePicture;

  //inputs for header if screen is less than 900

  backgroundColor: string = "white";
  imageSrc: string = cruzLogosBlack;
  linkColor: string = "black";
  menu: string = "black";
  boxShadow: boolean = true;

  ngOnInit(): void {}
}
