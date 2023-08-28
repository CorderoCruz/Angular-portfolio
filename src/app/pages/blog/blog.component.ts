import { Component, OnInit } from "@angular/core";
import { cruzLogosTransparent } from "src/app/shared/ImageReferences";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  constructor() {}
  //width of device
  width: number = window.innerWidth > 0 ? window.innerWidth : screen.width;

  backgroundColor: string = "white";
  imageSrc: string = cruzLogosTransparent;
  linkColor: string = "black";
  boxShadow: boolean = true;
  menu: string = "black";

  ngOnInit(): void {}
}
