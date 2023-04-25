import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { AngularFireModule } from "@angular/fire/compat";
import { AngularFireAuthModule } from "@angular/fire/compat/auth";
import { RouterModule, Routes } from "@angular/router";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { FontAwesomeModule } from "@fortawesome/angular-fontawesome";
import { AppComponent } from "./app.component";

import { firebaseConfig } from "../environment";
import { HeaderComponent } from "./components/header/header.component";
import { LandingComponent } from "./pages/landing/landing.component";

// Material

import { MatSidenavModule } from "@angular/material/sidenav";
import { MatTabsModule } from "@angular/material/tabs";
import { MatIconModule } from "@angular/material/icon";
import { MatToolbarModule } from "@angular/material/toolbar";
import { MatButtonModule } from "@angular/material/button";
import { BlogComponent } from "./pages/blog/blog.component";
import { AboutComponent } from "./pages/about/about.component";
import { ProjectsComponent } from "./pages/projects/projects.component";
import { ContactComponent } from "./pages/contact/contact.component";
import { StoreModule } from "@ngrx/store";
import { loadingReducer } from "./store/shared/loading/loading.reducer";
import { EffectsModule } from "@ngrx/effects";
import { LoadingEffects } from "./store/shared/loading/loading.effects";
import { ReactiveFormsModule } from "@angular/forms";
import { ContentContainerComponent } from "./components/content-container/content-container.component";
import { IntroComponent } from "./pages/intro/intro.component";
import { SidenavComponent } from "./components/sidenav/sidenav.component";
import { ProjectComponent } from "./pages/project/project.component";
import { NotFoundComponent } from "./pages/not-found/not-found.component";

const routes: Routes = [
  {
    path: "",
    component: LandingComponent,
  },
  {
    path: "project/:id",
    component: ProjectComponent,
  },
  { path: "blog", component: BlogComponent },
  {
    path: "page-unavailable",
    component: NotFoundComponent,
  },
  {
    path: "**",
    redirectTo: "/page-unavailable",
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
    ContentContainerComponent,
    IntroComponent,
    SidenavComponent,
    ProjectComponent,
    NotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(firebaseConfig),
    RouterModule.forRoot(routes),
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MatIconModule,
    MatButtonModule,
    FontAwesomeModule,
    StoreModule.forRoot({ pageLoading: loadingReducer }),
    EffectsModule.forRoot([LoadingEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
