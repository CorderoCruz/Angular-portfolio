import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  ViewChild,
} from "@angular/core";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faBars, faX } from "@fortawesome/free-solid-svg-icons";
import { HeaderService } from "src/app/shared/services/header.service";
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"],
})
export class HeaderComponent {
  headerService: HeaderService = inject(HeaderService);
  //header styling
  @Input() backgroundColor: string;
  @Input() imageSrc: string;
  @Input() linkColor: string;
  @Input() menu: string;
  @Input() boxShadow: boolean;

  //icons
  faBars: IconDefinition = faBars;
  faX: IconDefinition = faX;

  // allows us to click outside the navbar when on smaller screens and close the navigation bar
  @ViewChild("backgroundNav") backgroundNav: ElementRef;
  @HostListener("window:click", ["$event"])
  clicked(event: Event): void {
    const target = event.target;
    if (this.headerService.navBarActive) {
      const background = this.backgroundNav.nativeElement;
      if (target === background) this.headerService.navBarActive = false;
    }
  }

  //toggle
  toggleNav() {
    const navbarActive = this.headerService.navBarActive;
    navbarActive
      ? (this.headerService.navBarActive = false)
      : (this.headerService.navBarActive = true);
  }

  //resetting it navbar if the user clicks on a link
  linkClicked() {
    this.headerService.navBarActive = false;
  }

  oldScrollY = window.scrollY;

  @HostListener("window:scroll", ["$event"])
  onScroll(event: Event): void {
    const currentScroll: number = window.scrollY;
    if (
      (this.oldScrollY > currentScroll && this.oldScrollY !== currentScroll) ||
      currentScroll <= 0
    ) {
      this.headerService.displayNavbar = true;
    } else {
      this.headerService.displayNavbar = false;
    }

    this.oldScrollY = currentScroll;
  }

  links: string[] = ["Projects", "About", "Contact", "Blog"];
}
