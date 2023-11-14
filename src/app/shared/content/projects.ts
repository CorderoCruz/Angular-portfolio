export const vanguardContent = {
  title: "The Vanguard Group (Work Experience)",
  description:
    "I was contracted as an application developer for my Angular and NodeJS knowledge. I believe as a software engineer there is always something new that you will have to learn." +
    " This job has not proven otherwise. I have learned a new set of skills working in an agile environment such as, reactive and declaritive proggraming, testing patterns including end to end testing," +
    " unit testing and mutation testing to push out secure code, a mobile first approach when developing application layouts.",
  responsibilities:
    "As previously stated, I was contracted for my Angular expertice and was mainly responsible for the front end although I was a full stack developer also working with Nest JS, AWS EC2, DynamoDB, and AWS Lambda." +
    " I was responsible for our applications logic and flow rendering correctly on the template using Rxjs observables and operators and GraphQL for retrieving that data from our Nest JS backend." +
    " As a good developer, I wouldn't say that I am responsible for writing and maintaining clean code but rather apperant." +
    " But I believe the most valuable skill that I learned whils't working here was the team collaboration and the experience gained from one of the biggest companies in the world." +
    " I learned how the CI/CD pipeline works and operates to push out good and reliable code to clients," +
    " Team collaboration was always an amazing time seeing how other bright minds think and seeing them point out mistakes that you yourself would have missed or finding out better, faster ways of doing things." +
    " again coming from working in an agile team.",
};

export const portfolioContent = {
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
  images: [
    "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-intro.PNG",
    "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-about.PNG",
    "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-contact.PNG",
    "https://corderocruz-portfolio.s3.amazonaws.com/portfolio-project.png",
  ],
};

export const getFitContent = {
  title: "Get Fit",
  description: `<p><i>Get Fit</i> was created to help you achieve your fitness goals. Before I created Get Fit, I was using <i>My Fitness Pal</i> to calculate my daily
                nutritional goals, but I noticed that it lacked the functionality to being able to input foods for upcoming days, which made it really difficult to
                calculate my macros if I happen to be meal prepping for the week or even the next day. I created <i>Get Fit</i> to ease some of those pains of calculating
                your macros by simply creating an entry with your food's macro information and selecting a date for which you know you might consume the entry whether it's same
                day, or even if you missed a meal the day before, you can select the date you want to add the meal and just add it!</p>`,
  responsibilities: `<p>The focus of this project was not to make the best looking application but rather an application that can actually help someone out throughout their fitness
                    journey or even just their day to day, but that does not mean I am stopping here in terms of UI/UX. I plan on making it a little less dependent on Angular Material
                    and sort of make it my own, although it has been fun working with the styling library. Initially, this project was hosted on Firebase and used a Firebase database,
                    I learned a little bit of things from it as far as real-time data coming in and out of the database into the application, but I realized that in the future, I may 
                    need to scale it with something I am more familiar so I made the decision to migrate the database into a MongoDB cluster.</p>`,
  images: [
    `https://corderocruz-portfolio.s3.amazonaws.com/get-fit-start.PNG`,
    `https://corderocruz-portfolio.s3.amazonaws.com/get-fit-add-entry.PNG`,
    `https://corderocruz-portfolio.s3.amazonaws.com/get-fit-edit-entry.PNG`,
    `https://corderocruz-portfolio.s3.amazonaws.com/get-fit-add-meanl.PNG`,
  ],
};
