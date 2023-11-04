import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Project } from "src/app/project.interface";
import { TechImageLink } from "../links/stackReferences";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  projects: Project[] = [
    {
      id: 0,
      title: "The Vanguard Group",
      description:
        "I was contracted as an application developer for my Angular and node knowledge. I believe as a software engineer there is always something new that you will have to learn",
      responsibilities: "",
      images: [],
      repository: "",
      technologies: [
        {
          name: "",
          imageLink: "",
        },
      ],
      deployedLink: "",
    },
    {
      id: 1,
      title: "Portfolio",
      description:
        "This portfolio is to demonstrate my abilities as a full-stack software engineer. This portfolio was built from scratch without using a template." +
        " For now, this portfolio is hosted on Firebase and does not include a backend. I do plan on making this portfolio a full stack application," +
        " I plan on hosting the backend server on some AWS EC2 instance and using a database like DynamoDB to host my projects.",
      responsibilities:
        "I had a lot of fun building out this project. I used Angular 14 for my front-end framework as I am more familiar with it compared to React." +
        " I made this application with a desktop first approach mainly because this portfolio is meant to reach hiring managers or anyone of interest in doing" +
        " business with. To save space for deployement, I did not load all images locally but rather in a AWS S3 bucket." +
        " This portfolio was built from scratch. I could of used a template to project but I wanted to practice some more angular concepts like the @ViewChild and" +
        " @Hostlistener practices and using the inject function instead of the constructor for dependency injection. This project was a learning experience and I am glad" +
        " that I have built a solid foundation for it",
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
      images: [
        "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-intro.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-about.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-contact.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-project.png",
      ],
      deployedLink: "https://cruz-cor.web.app/",
      repository: "https://github.com/CorderoCruz/angular-portfolio",
    },
  ];

  _projects: Observable<any> = of(this.projects);
}
