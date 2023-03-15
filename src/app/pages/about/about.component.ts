import { Component } from "@angular/core";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent {
  backgroundColor: string = "transparent";
  imageSrc: string = "../../../assets/images/Cruz-logos_transparent.png";
  linkColor: string = "black";
}
