import {
  Component,
  Directive,
  ElementRef,
  HostListener,
  OnInit,
  ViewChild,
} from "@angular/core";
import { ChildActivationStart } from "@angular/router";
import { Store } from "@ngrx/store";
import {
  cruzLogosTransparent,
  profilePicture,
  transparentProfilePicture,
} from "src/app/shared/ImageReferences";
import { AboutService } from "src/app/shared/services/about.service";
import { HeaderService } from "src/app/shared/services/header.service";
import { LoadingActions } from "src/app/store/shared/loading/loading.actions";
import { selectPageStatus } from "src/app/store/shared/loading/loading.selector";

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  profilePicture: string = transparentProfilePicture;

  techs: { name: string; imageLink: string }[] = [
    {
      name: "MongoDB",
      imageLink: "https://img.icons8.com/color/48/null/mongodb.png",
    },
    {
      name: "MySQL",
      imageLink: "https://img.icons8.com/fluency/48/null/mysql-logo.png",
    },
    {
      name: "ExpressJS",
      imageLink: "https://img.icons8.com/ios/50/null/express-js.png",
    },
    {
      name: "ReactJS",
      imageLink: "https://img.icons8.com/color/48/null/react-native.png",
    },
    {
      name: "Angular2+",
      imageLink: "https://img.icons8.com/fluency/48/null/angularjs.png",
    },
    {
      name: "NodeJS",
      imageLink: "https://img.icons8.com/color/48/null/nodejs.png",
    },
    {
      name: "AWS",
      imageLink: "https://img.icons8.com/color/48/null/amazon-web-services.png",
    },
    {
      name: "GraphQL",
      imageLink: "https://img.icons8.com/color/48/null/graphql.png",
    },
  ];

  ngOnInit(): void {}
}
