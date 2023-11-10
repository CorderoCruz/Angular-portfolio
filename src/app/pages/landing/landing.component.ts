import { Component, OnInit, inject } from "@angular/core";
import { Logo, Profile } from "src/app/shared/links/ImageReferences";
import { BreakpointObserver } from "@angular/cdk/layout";
import { Observable, map } from "rxjs";

@Component({
  selector: "app-landing",
  templateUrl: "./landing.component.html",
  styleUrls: ["./landing.component.css"],
})
export class LandingComponent implements OnInit {
  private breakpointObserver = inject<BreakpointObserver>(BreakpointObserver);

  public cruzLogoWhite: string = Logo.WHITE;
  public profilePicture: string = Profile.REGULAR;

  public isMD$: Observable<boolean> = this.breakpointObserver.observe("(max-width: 900px)").pipe(map((value) => value.matches));

  backgroundColor: string = "white";
  imageSrc: string = Logo.BLACK;
  linkColor: string = "black";
  menu: string = "black";
  boxShadow: boolean = true;

  ngOnInit(): void {}
}
