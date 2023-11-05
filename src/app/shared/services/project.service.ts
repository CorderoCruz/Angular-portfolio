import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Project } from "src/app/project.interface";
import { TechImageLink } from "../links/stackReferences";
import { portfolioContent, vanguardContent } from "@content";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 0,
      title: vanguardContent.title,
      description: vanguardContent.description,
      responsibilities: vanguardContent.responsibilities,
      images: [],
      repository: "",
      technologies: [
        {
          name: "NestJS",
          imageLink: TechImageLink.NestJS,
        },
        {
          name: "TypeScript",
          imageLink: TechImageLink.TypeScript,
        },
        {
          name: "Angular",
          imageLink: TechImageLink.Angular,
        },
        {
          name: "NodeJS",
          imageLink: TechImageLink.NodeJS,
        },
        {
          name: "ExpressJS",
          imageLink: TechImageLink.ExpressJS,
        },
        {
          name: "AWS",
          imageLink: TechImageLink.AWS,
        },
        {
          name: "Jest",
          imageLink: TechImageLink.Jest,
        },
        {
          name: "HTML5",
          imageLink: TechImageLink.HTML5,
        },
        {
          name: "CSS",
          imageLink: TechImageLink.CSS,
        },
      ],
    },
    {
      id: 1,
      title: portfolioContent.title,
      description: portfolioContent.description,
      responsibilities: portfolioContent.responsibilities,
      technologies: [
        {
          name: "MongoDB",
          imageLink: TechImageLink.MongoDB,
        },
        {
          name: "ExpressJS",
          imageLink: TechImageLink.ExpressJS,
        },
        {
          name: "Angular2+",
          imageLink: TechImageLink.Angular,
        },
        {
          name: "NodeJS",
          imageLink: TechImageLink.NodeJS,
        },
        {
          name: "AWS",
          imageLink: TechImageLink.AWS,
        },
        {
          name: "Firebase",
          imageLink: TechImageLink.Firebase,
        },
      ],
      images: portfolioContent.images,
      deployedLink: "https://cordero-cruz.web.app/",
      repository: "https://github.com/CorderoCruz/angular-portfolio",
    },
  ];

  projects$: Observable<Project[]> = of(this.projects);
}
