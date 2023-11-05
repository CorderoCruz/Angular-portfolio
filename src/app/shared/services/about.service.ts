import { Injectable } from "@angular/core";
import { TechImageLink, TechName } from "../links/stackReferences";

export type Tech = {
  name: string;
  imageLink: string;
};

@Injectable({
  providedIn: "root",
})
export class AboutService {
  techs: Tech[] = [
    {
      name: TechName.TypeScript,
      imageLink: TechImageLink.TypeScript,
    },
    {
      name: TechName.JavaScript,
      imageLink: TechImageLink.JavaScript,
    },
    {
      name: TechName.HTML5,
      imageLink: TechImageLink.HTML5,
    },
    {
      name: TechName.CSS,
      imageLink: TechImageLink.CSS,
    },
    {
      name: TechName.SASS,
      imageLink: TechImageLink.SASS,
    },
    {
      name: TechName.TailWindCSS,
      imageLink: TechImageLink.TailWindCSS,
    },
    {
      name: TechName.Bootstrap,
      imageLink: TechImageLink.Bootstrap,
    },
    {
      name: TechName.MongoDB,
      imageLink: TechImageLink.MongoDB,
    },
    {
      name: TechName.MySQL,
      imageLink: TechImageLink.MySQL,
    },
    {
      name: TechName.ExpressJS,
      imageLink: TechImageLink.ExpressJS,
    },
    {
      name: TechName.NestJS,
      imageLink: TechImageLink.NestJS,
    },
    {
      name: TechName.React,
      imageLink: TechImageLink.React,
    },
    {
      name: TechName.Angular,
      imageLink: TechImageLink.Angular,
    },
    {
      name: TechName.Jest,
      imageLink: TechImageLink.Jest,
    },
    {
      name: TechName.NodeJS,
      imageLink: TechImageLink.NodeJS,
    },
    {
      name: TechName.AWS,
      imageLink: TechImageLink.AWS,
    },
    {
      name: TechName.GraphQL,
      imageLink: TechImageLink.GraphQL,
    },
    {
      name: TechName.GitBash,
      imageLink: TechImageLink.GitBash,
    },
    {
      name: TechName.GitHub,
      imageLink: TechImageLink.GitHub,
    },
    {
      name: TechName.BitBucket,
      imageLink: TechImageLink.BitBucket,
    },
    {
      name: TechName.Jira,
      imageLink: TechImageLink.Jira,
    },
    {
      name: TechName.Confluence,
      imageLink: TechImageLink.Confluence,
    },
  ];
}
