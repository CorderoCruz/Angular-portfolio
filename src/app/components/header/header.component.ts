import { Component, ElementRef, Input } from "@angular/core";
import { Icon, IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { ViewChild } from "@angular/core";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  @Input() backgroundColor: string;
  @Input() imageSrc: string;
  @Input() linkColor: string;

  faBars: IconDefinition = faBars;
  faX: IconDefinition = faX;

  //toggle the navbnar
  activeNav: boolean = false;

  toggleNav(event: Event) {
    !this.activeNav ? (this.activeNav = true) : (this.activeNav = false);
  }
}
