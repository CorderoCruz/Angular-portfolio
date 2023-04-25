import { ElementRef, Injectable } from "@angular/core";
import { fromEvent } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class HeaderService {
  constructor() {}

  displayNavbar: boolean = true;

  navBarActive: boolean = false;

  outsideNav(): void {
    const clicked = fromEvent(document, "click");
    console.log(clicked);
  }
}
