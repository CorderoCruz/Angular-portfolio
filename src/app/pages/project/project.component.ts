import { Component, inject, OnInit } from "@angular/core";
import { ActivatedRoute } from "@angular/router";
import { map, Observable, switchMap } from "rxjs";
import { Project } from "src/app/project.interface";
import { Logo } from "src/app/shared/links/ImageReferences";
import { ProjectService } from "src/app/shared/services/project.service";
import { BreakpointObserver } from "@angular/cdk/layout";

@Component({
  selector: "app-project",
  templateUrl: "./project.component.html",
  styleUrls: ["./project.component.css"],
})
export class ProjectComponent implements OnInit {
  private projectService: ProjectService = inject(ProjectService);
  private route = inject<ActivatedRoute>(ActivatedRoute);
  private breakpointObserver = inject<BreakpointObserver>(BreakpointObserver);

  public isSM: Observable<boolean> = this.breakpointObserver.observe("(max-width: 900px)").pipe(map((value) => value.matches));

  public backgroundColor: string = "white";
  public imageSrc: string = Logo.BLACK;
  public linkColor: string = "black";
  public menu: string = "black";
  public boxShadow: boolean = true;

  public project$: Observable<Project> = this.route.params.pipe(
    switchMap((param) =>
      this.projectService.projects$.pipe(map((projects: Project[]) => projects.filter((project: Project) => project.id === parseInt(param["id"]))[0]))
    )
  );

  ngOnInit(): void {}
}
