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
import { cruzLogosTransparent } from "src/app/shared/ImageReferences";
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
  imageSrc: string = cruzLogosTransparent;
  linkColor: string = "black";

  projectService: ProjectService = inject(ProjectService);

  hovered: number | string;

  hoveredProject(projectId: number): void {
    this.hovered = projectId;
  }

  observer: IntersectionObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        console.log("intersecting");
        this.isIntersected.next(true);
        setTimeout(() => {
          this.slideInCount.next(1);
        }, 500);
      } else {
        this.isIntersected.next(false);
      }
    });
  });

  ngOnInit(): void {}

  ngAfterViewInit(): void {
    this.observer.observe(this.images.nativeElement);
  }
}
