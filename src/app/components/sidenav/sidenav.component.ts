import { Component, inject, signal, WritableSignal } from "@angular/core";
import { Logo } from "src/app/shared/links/ImageReferences";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
  headerService: HeaderService = inject(HeaderService);

  cruzLogoTransparent: string = Logo.TRANSPARENT;

  activeLinkUnderline: WritableSignal<string> = signal("");

  activeLink(link: string): void {
    const line: string = link.toLocaleLowerCase();

    switch (line) {
      case "about":
        this.activeLinkUnderline.set("20px");
        break;
      case "projects":
        this.activeLinkUnderline.set("46px");
        break;
      case "contact":
        this.activeLinkUnderline.set("74px");
        break;
      default:
        this.activeLinkUnderline.set("102px");
        break;
    }
  }

  isLinkOut: WritableSignal<boolean> = signal(false);

  mouseOver() {
    this.isLinkOut.set(this.isLinkOut() ? false : true);
  }

  setObeservable() {}
}
