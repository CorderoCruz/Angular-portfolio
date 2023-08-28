import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class AboutService {
  constructor() {}
  techs: { name: string; imageLink: string }[] = [
    {
      name: "TypeScript",
      imageLink: "https://img.icons8.com/color/48/null/typescript.png",
    },
    {
      name: "JavaScript",
      imageLink: "https://img.icons8.com/fluency/48/null/javascript.png",
    },
    {
      name: "HTML5",
      imageLink: "https://img.icons8.com/arcade/64/null/html-5.png",
    },
    { name: "CSS", imageLink: "https://img.icons8.com/color/48/null/css3.png" },
    {
      name: "SASS",
      imageLink: "https://img.icons8.com/color/48/null/sass.png",
    },
    {
      name: "TailWindCSS",
      imageLink: "https://img.icons8.com/color/48/null/tailwindcss.png",
    },
    {
      name: "Bootstrap",
      imageLink: "https://img.icons8.com/color/48/null/bootstrap.png",
    },
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
    {
      name: "Git Bash",
      imageLink: "https://img.icons8.com/color/48/null/git.png",
    },
    {
      name: "Github",
      imageLink: "https://img.icons8.com/ios-filled/50/null/github.png",
    },
  ];
}
