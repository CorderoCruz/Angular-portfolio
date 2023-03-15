import { Component } from "@angular/core";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent {
  backgroundColor: string = "rgb(92,132,204)";
  imageSrc: string = "../../../assets/images/Cruz-logos_blue.png";
  linkColor: string = "white";
}
