import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppComponent } from "./app.component";
import { HeaderComponent } from "./components/header/header.component";
import { LandingComponent } from "./pages/landing/landing.component";

import { BlogComponent } from "./pages/blog/blog.component";
import { AboutComponent } from "./components/about/about.component";
import { ProjectsComponent } from "./components/projects/projects.component";
import { ContactComponent } from "./components/contact/contact.component";
import { ReactiveFormsModule } from "@angular/forms";
import { IntroComponent } from "./components/intro/intro.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ProjectComponent } from "./pages/project/project.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";
import { LazyLoadingDirective } from "./lazy-loading.directive";
import { NavigationComponent } from "./components/navigation/navigation.components";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "project/:id",
    component: ProjectComponent,
  },
  {
    path: "blog",
    component: BlogComponent,
  },

  {
    path: "**",
    redirectTo: "/page-unavailable",
  },
  {
    path: "page-unavailable",
    component: NotFoundComponent,
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LandingComponent,
    BlogComponent,
    AboutComponent,
    ProjectsComponent,
    ContactComponent,
    IntroComponent,
    NavigationComponent,
    SidenavComponent,
    ProjectComponent,
    NotFoundComponent,
    LazyLoadingDirective,
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes), BrowserAnimationsModule, ReactiveFormsModule, FontAwesomeModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
