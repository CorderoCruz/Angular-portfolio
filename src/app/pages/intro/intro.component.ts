import { Component, ElementRef, HostListener, ViewChild } from "@angular/core";

@Component({
  selector: "app-intro",
  templateUrl: "./intro.component.html",
  styleUrls: ["./intro.component.css"],
})
export class IntroComponent {
  @ViewChild("container") container: ElementRef;

  @HostListener("document:scroll", ["$event"])
  scroll(): void {}
}
