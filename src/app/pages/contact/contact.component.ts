import { Component } from "@angular/core";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent {
  backgroundColor: string = "black";
  imageSrc: string = "../../../assets/images/Cruz-logos_white.png";
  linkColor: string = "white";
}
