import { Component, inject, OnInit } from "@angular/core";
import { AboutService } from "src/app/shared/services/about.service";
import { Profile } from "src/app/shared/links/ImageReferences";

export type Content = {
  paragraph: string;
};

@Component({
  selector: "app-about",
  templateUrl: "./about.component.html",
  styleUrls: ["./about.component.css"],
})
export class AboutComponent implements OnInit {
  aboutService: AboutService = inject(AboutService);

  contents: Content[] = [
    {
      paragraph: `Hello, my name is Cruz Cordero and I am a full stack software
      engineer. I have learned a lot of my knowledge through University of
      California, Riverside Coding Bootcamp, where I earned my certificate
      from, but most of my knowledge comes from my own self learning.`,
    },
    {
      paragraph: `I am proficient with the MERN and MEAN stack, relational and
      non-relational databases such as MongoDB, MySQL, DynamoDB, and cloud
      technology AWS.`,
    },
    {
      paragraph: `I have a a passion for leaning new things. I am loving this journey as
      a software developer and I can not wait to see where takes it takes
      me.`,
    },
  ];

  ngOnInit(): void {}
}
