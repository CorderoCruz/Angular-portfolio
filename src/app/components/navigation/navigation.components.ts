import { BreakpointObserver } from "@angular/cdk/layout";
import { Component, inject } from "@angular/core";
import { Observable, map } from "rxjs";

@Component({
  selector: `navigation`,
  template: ` <ng-container *ngIf="!(isMD$ | async); else header">
      <app-sidenav></app-sidenav>
    </ng-container>
    <ng-template #header>
      <app-header></app-header>
    </ng-template>`,
})
export class NavigationComponent {
  private breakpointObserver = inject<BreakpointObserver>(BreakpointObserver);

  public isMD$: Observable<boolean> = this.breakpointObserver.observe("(max-width: 900px)").pipe(map((value) => value.matches));
}
