import { Component, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { cruzLogosBlue } from "src/app/shared/ImageReferences";
import { LoadingActions } from "src/app/store/shared/loading/loading.actions";

@Component({
  selector: "app-blog",
  templateUrl: "./blog.component.html",
  styleUrls: ["./blog.component.css"],
})
export class BlogComponent implements OnInit {
  constructor(private store: Store) {}
  //width of device
  width: number = window.innerWidth > 0 ? window.innerWidth : screen.width;

  backgroundColor: string = "rgb(92,132,204)";
  imageSrc: string = cruzLogosBlue;
  linkColor: string = this.width < 900 ? "black" : "white";
  boxShadow: boolean = true;
  menu: string = "white";

  ngOnInit(): void {
    this.store.dispatch(LoadingActions.loadPageRequest({ status: true }));
  }
}
