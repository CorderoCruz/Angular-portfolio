import { Component, inject, signal, WritableSignal } from "@angular/core";
import { Logo } from "src/app/shared/links/ImageReferences";
import { HeaderService } from "src/app/shared/services/header.service";

@Component({
  selector: "app-sidenav",
  templateUrl: "./sidenav.component.html",
  styleUrls: ["./sidenav.component.css"],
})
export class SidenavComponent {
  private headerService = inject<HeaderService>(HeaderService);

  public cruzLogoTransparent: string = Logo.TRANSPARENT;
  public activeLinkUnderline: WritableSignal<string> = signal("");
  public links: string[] = this.headerService.links;

  public activeLink(link: string): void {
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

  public isLinkOut: WritableSignal<boolean> = signal(false);

  public mouseOver() {
    this.isLinkOut.set(this.isLinkOut() ? false : true);
  }
}
