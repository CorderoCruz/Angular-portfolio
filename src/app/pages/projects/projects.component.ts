import { AfterViewInit, Component, inject, Input, OnInit } from "@angular/core";
import { Store } from "@ngrx/store";
import { map, Observable } from "rxjs";
import { Project } from "src/app/project.interface";
import {
  cruzLogosTransparent,
  landingBackground,
} from "src/app/shared/ImageReferences";
import { ProjectService } from "src/app/shared/services/project.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  backgroundColor: string = "transperent";
  imageSrc: string = cruzLogosTransparent;
  linkColor: string = "black";

  projectService: ProjectService = inject(ProjectService);

  hovered: number | string;

  hoveredProject(projectId: number): void {
    this.hovered = projectId;
  }

  projects: Observable<any> = this.projectService._projects;

  ngAfterViewInit(): void {}

  ngOnInit(): void {}
}
