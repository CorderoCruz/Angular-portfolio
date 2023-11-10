import { AfterViewInit, ChangeDetectionStrategy, Component, ElementRef, inject, OnInit, ViewChild } from "@angular/core";
import { BehaviorSubject, Observable } from "rxjs";
import { Project } from "src/app/project.interface";
import { Logo } from "src/app/shared/links/ImageReferences";
import { ProjectService } from "src/app/shared/services/project.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  private projectService: ProjectService = inject(ProjectService);

  public projects$: Observable<Project[]> = this.projectService.projects$;

  isIntersected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  slideInCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  backgroundColor: string = "transperent";
  imageSrc: string = Logo.TRANSPARENT;
  linkColor: string = "black";

  hovered: number;

  hoveredProject(projectId: number): void {
    this.hovered = projectId;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
