import {
  AfterViewChecked,
  AfterViewInit,
  Component,
  ElementRef,
  OnInit,
  ViewChild,
} from "@angular/core";
import { Store } from "@ngrx/store";
import {
  contact,
  cruzLogosBlack,
  cruzLogosWhite,
} from "src/app/shared/ImageReferences";
import { LoadingActions } from "src/app/store/shared/loading/loading.actions";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { IconDefinition } from "@fortawesome/fontawesome-svg-core";
import { faMessage } from "@fortawesome/free-regular-svg-icons";
import { selectPageStatus } from "src/app/store/shared/loading/loading.selector";
import { ContactService } from "src/app/shared/services/contact.service";
import {
  debounce,
  debounceTime,
  delay,
  fromEvent,
  Observable,
  take,
} from "rxjs";
import { ChildActivationStart } from "@angular/router";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  @ViewChild("email") email: ElementRef;

  constructor(private store: Store, private contactService: ContactService) {}

  faLinkedin: IconDefinition = faLinkedin;
  faGithub: IconDefinition = faGithub;
  faMessage: IconDefinition = faMessage;

  backgroundColor: string = "transparent";
  imageSrc: string = cruzLogosBlack;
  linkColor: string = "black";
  menu: string = "black";
  boxShadow: boolean = false;
  contactImage: string = contact;

  loading$ = this.store.select(selectPageStatus);

  activeMail: boolean = false;

  activateMail(event: Event): void {
    event.preventDefault();
    this.activeMail ? (this.activeMail = false) : (this.activeMail = true);
    setTimeout(() => {
      this.activeMail = false;
    }, 1000);
  }

  ngOnInit(): void {
    this.store.dispatch(LoadingActions.loadPageRequest({ status: true }));
  }
}
