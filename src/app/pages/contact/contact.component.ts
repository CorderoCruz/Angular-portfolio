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
import {} from "rxjs";
import { FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: "app-contact",
  templateUrl: "./contact.component.html",
  styleUrls: ["./contact.component.css"],
})
export class ContactComponent implements OnInit {
  @ViewChild("email") mail: ElementRef;

  constructor(
    private store: Store,
    private contactService: ContactService,
    private fb: FormBuilder
  ) {}

  faLinkedin: IconDefinition = faLinkedin;
  faGithub: IconDefinition = faGithub;
  faMessage: IconDefinition = faMessage;

  backgroundColor: string = "white";
  imageSrc: string = cruzLogosBlack;
  linkColor: string = "black";
  menu: string = "black";
  boxShadow: boolean = true;
  contactImage: string = contact;

  loading$ = this.store.select(selectPageStatus);

  activeMail: boolean = false;

  formSent: boolean = false;

  activateMail(event: Event): void {
    event.preventDefault();
    this.activeMail ? (this.activeMail = false) : (this.activeMail = true);
    setTimeout(() => {
      this.activeMail = false;
    }, 1000);
  }

  contactForm = this.fb.group({
    name: ["", Validators.required],
    email: ["", Validators.required],
    subject: ["", Validators.required],
    inquiry: ["", Validators.required],
  });

  //getting the values from the form for form controls

  get name() {
    return this.contactForm.get("name");
  }

  get email() {
    return this.contactForm.get("email");
  }

  get subject() {
    return this.contactForm.get("subject");
  }

  get inquiry() {
    return this.contactForm.get("inquiry");
  }

  submitForm(): void {
    this.contactService.submitContactForm({
      ...this.contactForm.getRawValue(),
    });
    this.formSent = true;
  }

  ngOnInit(): void {
    this.store.dispatch(LoadingActions.loadPageRequest({ status: true }));
  }
}
