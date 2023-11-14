import { ChangeDetectionStrategy, Component, ElementRef, inject, signal, ViewChild } from "@angular/core";
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
export class ProjectsComponent {
  @ViewChild("slide") slide: ElementRef;

  private projectService: ProjectService = inject(ProjectService);

  public projects$: Observable<Project[]> = this.projectService.projects$;

  public hovered = signal<number>(1e9);

  private isDown: boolean = false;
  private startX: number;
  private scrollLeft: number;

  public mouseDown(e: MouseEvent): void {
    this.isDown = true;
    this.startX = e.pageX - this.slide.nativeElement.offsetLeft;
    this.scrollLeft = this.slide.nativeElement.scrollLeft;
  }

  public mouseLeave(): void {
    this.isDown = false;
  }

  public mouseUp(): void {
    this.isDown = false;
  }
  public mouseMove(e: MouseEvent): void {
    if (!this.isDown) return;
    e.preventDefault();
    const x = e.pageX - this.slide.nativeElement.offsetLeft;
    const walk = x - this.startX;
    this.slide.nativeElement.scrollLeft = this.scrollLeft - walk;
  }

  hoveredProject(projectId: number): void {
    this.hovered.set(projectId);
  }
}
