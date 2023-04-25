import {
  Component,
  ElementRef,
  HostListener,
  inject,
  Input,
  OnInit,
  ViewChild,
} from "@angular/core";
import { faBars, faX, IconDefinition } from "@fortawesome/free-solid-svg-icons";
import { filter, map, Observable } from "rxjs";
import { Project } from "src/app/project.interface";
import { cruzLogosBlack } from "src/app/shared/ImageReferences";
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
  imageSrc: string = cruzLogosBlack;
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
