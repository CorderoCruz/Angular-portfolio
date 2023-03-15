import { Component } from "@angular/core";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent {
  backgroundColor: string = "rgba(0,  0, 0 , .7)";
  imageSrc: string = "../../../assets/images/Cruz-logos_white.png";
  linkColor: string = "white";
}
