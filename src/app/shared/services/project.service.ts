import { Injectable } from "@angular/core";
import { from, Observable, of } from "rxjs";
import { Project } from "src/app/project.interface";
import { landingBackground } from "../ImageReferences";

@Injectable({
  providedIn: "root",
})
export class ProjectService {
  templateImage: string = landingBackground;

  projects: Project[] = [
    {
      id: 1,
      title: "Manolo Barbershop",
      description:
        "Manolo Barbershop is a barbershop located in Riverside, California. Close to the amazing University of California, Riverside. Manolo Barbershop was previously using a google web template for their online website." +
        " We reached out to the organization to inquire if they were interested in letting me and my classmates build them a enterprise level web application, in which they agreed to." +
        " The web application itself was build on the MERN stack, MongoDB for our database, ExpressJS to architect our server, React for our front-end library, and NodeJS for our backend environment." +
        " Apart from the MERN stack, we also used a couple more libraries like TalwindCSS for our styling, Json Web Tokens for our front-end local storage key, to be validated by the backend." +
        " GraphQL for querying data from our backend server and database, bcrypt to hash our user's passwords for sercurity protection, and lastly our hosting environment Heroku.",
      responsibilities:
        "For this project, I was incharge of designing and mostly the front-end and deployment. I did contribute some backend routing, but my main task was to make an optimized and responsive front-end application" +
        " I used media queries to make the application fully responsive with a mobile first approach. I used the TailwindCSS library to have easy access to inline styling. I made sure that all the end" +
        " points to our backend server were up and running and for every user that makes and account is able to do so securely by using local storage to store the user's Json Web Token and send that token with every request" +
        " that would require the user to be authenticated. Creating form validations to avoid any cross site script injection. Routing the user to the correct web address using React Router. Implementing Google Maps API for the user to be able to locate Manolo Barbershop without leaving the application." +
        " Lastly, the deployment of our application to Heroku.",
      technologies: [
        {
          name: "MongooDb",
          imageLink: "https://img.icons8.com/color/48/null/mongodb.png",
        },
        {
          name: "ExpressJS",
          imageLink: "https://img.icons8.com/ios/50/null/express-js.png",
        },
        {
          name: "React",
          imageLink: "https://img.icons8.com/color/48/null/react-native.png",
        },
        {
          name: "NodeJS",
          imageLink: "https://img.icons8.com/fluency/48/null/node-js.png",
        },
        {
          name: "GrahQL",
          imageLink: "https://img.icons8.com/color/48/null/graphql.png",
        },
        {
          name: "Heroku",
          imageLink: "https://img.icons8.com/ios/50/null/heroku.png",
        },
      ],
      images: [
        "https://corderocruz-portfolio.s3.amazonaws.com/manolo-home.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/manolo-footer.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/manolo-auth.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/manolo-shop.png",
      ],
      deployedLink: "https://manolo-barbershop.herokuapp.com/",
      repository: "https://github.com/SklylerF/manolo-barber-shop",
    },
    {
      id: 2,
      title: "Portfolio",
      description:
        "Manolo Barbershop is a barbershop located in Riverside, California. Close to the amazing University of California, Riverside. Manolo Barbershop was previously using a google web template for their online website." +
        " We reached out to the organization to inquire if they were interested in letting me and my classmates build them a enterprise level web application, in which they agreed to." +
        " The web application itself was build on the MERN stack, MongoDB for our database, ExpressJS to architect our server, React for our front-end library, and NodeJS for our backend environment." +
        " Apart from the MERN stack, we also used a couple more libraries like TalwindCSS for our styling, Json Web Tokens for our front-end local storage key, to be validated by the backend." +
        " GraphQL for querying data from our backend server and database, bcrypt to hash our user's passwords for sercurity protection, and lastly our hosting environment Heroku.",
      responsibilities:
        "For this project, I was incharge of designing and mostly the front-end and deployment. I did contribute some backend routing, but my main task was to make an optimized and responsive front-end application" +
        " I used media queries to make the application fully responsive with a mobile first approach. I used the TailwindCSS library to have easy access to inline styling. I made sure that all the end" +
        " points to our backend server were up and running and for every user that makes and account is able to do so securely by using local storage to store the user's Json Web Token and send that token with every request" +
        " that would require the user to be authenticated. Creating form validations to avoid any cross site script injection. Routing the user to the correct web address using React Router. Implementing Google Maps API for the user to be able to locate Manolo Barbershop without leaving the application." +
        " Lastly, the deployment of our application to Heroku.",
      technologies: [
        {
          name: "MongooDb",
          imageLink: "https://img.icons8.com/color/48/null/mongodb.png",
        },
        {
          name: "ExpressJS",
          imageLink: "https://img.icons8.com/ios/50/null/express-js.png",
        },
        {
          name: "Angular2+",
          imageLink: "https://img.icons8.com/fluency/48/null/angularjs.png",
        },
        {
          name: "NodeJS",
          imageLink: "https://img.icons8.com/fluency/48/null/node-js.png",
        },
        {
          name: "AWS",
          imageLink:
            "https://img.icons8.com/color/48/null/amazon-web-services.png",
        },
        {
          name: "Firebase",
          imageLink: "https://img.icons8.com/color/48/null/firebase.png",
        },
      ],
      images: [
        "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-intro.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-about.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-contact.PNG",
        "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-project.png",
      ],
      deployedLink: "https://cruz-cor.web.app/",
      repository: "https://github.com/SklylerF/manolo-barber-shop",
    },
  ];

  _projects: Observable<any> = of(this.projects);
}
