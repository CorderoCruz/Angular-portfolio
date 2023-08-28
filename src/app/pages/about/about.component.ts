import { Component, inject, OnInit } from "@angular/core";

import { transparentProfilePicture } from "src/app/shared/ImageReferences";
import { AboutService } from "src/app/shared/services/about.service";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  profilePicture: string = transparentProfilePicture;
  aboutService: AboutService = inject(AboutService);

  ngOnInit(): void {}
}
