import { Component, OnInit } from "@angular/core";
import { Logo, Profile } from "src/app/shared/links/ImageReferences";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent implements OnInit {
  constructor(public headerService: HeaderService) {}
  cruzLogoWhite: string = Logo.WHITE;
  profilePicture: string = Profile.REGULAR;

  //inputs for header if screen is less than 900

  backgroundColor: string = "white";
  imageSrc: string = Logo.BLACK;
  linkColor: string = "black";
  menu: string = "black";
  boxShadow: boolean = true;

  ngOnInit(): void {}
}
