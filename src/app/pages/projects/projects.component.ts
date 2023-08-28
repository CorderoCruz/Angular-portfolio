import { Component, inject, OnInit } from "@angular/core";
import { cruzLogosTransparent } from "src/app/shared/ImageReferences";
import { ProjectService } from "src/app/shared/services/project.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
})
export class ProjectsComponent implements OnInit {
  backgroundColor: string = "transperent";
  imageSrc: string = cruzLogosTransparent;
  linkColor: string = "black";

  projectService: ProjectService = inject(ProjectService);

  hovered: number | string;

  hoveredProject(projectId: number): void {
    this.hovered = projectId;
  }

  ngOnInit(): void {}
}
