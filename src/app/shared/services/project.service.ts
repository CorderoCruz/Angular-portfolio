import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Project } from "src/app/project.interface";
import { TechImageLink, TechName } from "../links/stackReferences";
import { getFitContent, portfolioContent, vanguardContent } from "src/app/shared/content";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  private projects: Project[] = [
    {
      id: 0,
      title: vanguardContent.title,
      description: vanguardContent.description,
      responsibilities: vanguardContent.responsibilities,
      images: [],
      repository: "",
      technologies: [
        {
          name: TechName.NestJS,
          imageLink: TechImageLink.NestJS,
        },
        {
          name: TechName.TypeScript,
          imageLink: TechImageLink.TypeScript,
        },
        {
          name: TechName.Angular,
          imageLink: TechImageLink.Angular,
        },
        {
          name: TechName.NodeJS,
          imageLink: TechImageLink.NodeJS,
        },
        {
          name: TechName.ExpressJS,
          imageLink: TechImageLink.ExpressJS,
        },
        {
          name: TechName.AWS,
          imageLink: TechImageLink.AWS,
        },
        {
          name: TechName.Jest,
          imageLink: TechImageLink.Jest,
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
          name: TechName.Jira,
          imageLink: TechImageLink.Jira,
        },
        {
          name: TechName.BitBucket,
          imageLink: TechImageLink.BitBucket,
        },
      ],
    },
    {
      id: 1,
      title: getFitContent.title,
      description: getFitContent.description,
      responsibilities: getFitContent.responsibilities,
      technologies: [
        {
          name: TechName.MongoDB,
          imageLink: TechImageLink.MongoDB,
        },
        {
          name: TechName.NestJS,
          imageLink: TechImageLink.NestJS,
        },
        {
          name: TechName.Angular,
          imageLink: TechImageLink.Angular,
        },
        {
          name: TechName.NodeJS,
          imageLink: TechImageLink.NodeJS,
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
          name: TechName.Material,
          imageLink: TechImageLink.Material,
        },
        {
          name: TechName.AWS,
          imageLink: TechImageLink.AWS,
        },
        {
          name: TechName.Firebase,
          imageLink: TechImageLink.Firebase,
        },
      ],
      images: getFitContent.images,
      deployedLink: "https://get-fit-45e8d.web.app/",
      repository: "https://github.com/CorderoCruz/angular-portfolio",
    },
    {
      id: 2,
      title: portfolioContent.title,
      description: portfolioContent.description,
      responsibilities: portfolioContent.responsibilities,
      technologies: [
        {
          name: TechName.MongoDB,
          imageLink: TechImageLink.MongoDB,
        },
        {
          name: TechName.ExpressJS,
          imageLink: TechImageLink.ExpressJS,
        },
        {
          name: TechName.Angular,
          imageLink: TechImageLink.Angular,
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
          name: TechName.Firebase,
          imageLink: TechImageLink.Firebase,
        },
      ],
      images: portfolioContent.images,
      deployedLink: "https://cordero-cruz.web.app/",
      repository: "https://github.com/CorderoCruz/angular-portfolio",
    },
  ];

  public projects$: Observable<Project[]> = of(this.projects);
}
