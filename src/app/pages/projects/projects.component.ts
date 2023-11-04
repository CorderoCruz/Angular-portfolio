import {
  AfterViewInit,
  ChangeDetectionStrategy,
  Component,
  ElementRef,
  inject,
  OnInit,
  ViewChild,
} from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { Logo } from "src/app/shared/links/ImageReferences";
import { ProjectService } from "src/app/shared/services/project.service";

@Component({
  selector: "app-projects",
  templateUrl: "./projects.component.html",
  styleUrls: ["./projects.component.css"],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProjectsComponent implements OnInit, AfterViewInit {
  @ViewChild("img") images: ElementRef;

  isIntersected: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  slideInCount: BehaviorSubject<number> = new BehaviorSubject<number>(0);

  backgroundColor: string = "transperent";
  imageSrc: string = Logo.TRANSPARENT;
  linkColor: string = "black";

  projectService: ProjectService = inject(ProjectService);

  hovered: number;

  hoveredProject(projectId: number): void {
    this.hovered = projectId;
  }

  ngOnInit(): void {}

  ngAfterViewInit(): void {}
}
