import { Component, inject, OnInit } from "@angular/core";
import { map, Observable } from "rxjs";
import { Project } from "src/app/project.interface";
import { Logo } from "src/app/shared/links/ImageReferences";
import { HeaderService } from "src/app/shared/services/header.service";
import { ProjectService } from "src/app/shared/services/project.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  projectService: ProjectService = inject(ProjectService);
  headerService: HeaderService = inject(HeaderService);

  //header styling
  backgroundColor: string = "white";
  imageSrc: string = Logo.BLACK;
  linkColor: string = "black";
  menu: string = "black";
  boxShadow: boolean = true;

  projectId: string =
    location.pathname.split("/")[location.pathname.split("/").length - 1];

  _project: Observable<Project> = this.projectService._projects.pipe(
    map(
      (projects: Project[]) =>
        projects.filter((project) => project.id === parseInt(this.projectId))[0]
    )
  );

  ngOnInit(): void {}
}
