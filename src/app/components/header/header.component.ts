import { Component, ElementRef, Input } from "@angular/core";
import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { ViewChild } from "@angular/core";
import { HeaderService } from "src/app/shared/services/header.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  constructor(public headerService: HeaderService) {}
  //header styling
  @Input() backgroundColor: string;
  @Input() imageSrc: string;
  @Input() linkColor: string;
  @Input() menu: string;
  @Input() boxShadow: boolean;

  //icons
  faBars: IconDefinition = faBars;
  faX: IconDefinition = faX;

  //toggle
  toggleNav() {
    if (this.headerService.navBarActive) {
      this.headerService.navBarActive = false;
      if (location.pathname === "/") {
        this.menu = "white";
      }
    } else {
      this.headerService.navBarActive = true;
      this.linkColor = "black";
      if (location.pathname === "/") {
        this.menu = "black";
      }
    }
  }

  //resetting it navbar if the user clicks on a link
  linkClicked() {
    this.headerService.navBarActive = false;
  }
}
