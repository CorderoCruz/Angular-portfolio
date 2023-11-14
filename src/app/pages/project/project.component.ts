import { Component, inject } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";
import { Project } from "src/app/project.interface";
import { ProjectService } from "src/app/shared/services/project.service";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent {
  private projectService: ProjectService = inject(ProjectService);
  private route = inject<ActivatedRoute>(ActivatedRoute);

  public project$: Observable<Project> = this.route.params.pipe(
    switchMap((param) => {
      return this.projectService.projects$.pipe(
        map((projects: Project[]) => projects.filter((project: Project) => project.id === parseInt(param["id"]))[0])
      );
    })
  );
}
