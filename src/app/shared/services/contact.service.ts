import { Injectable } from "@angular/core";
import emailjs, { EmailJSResponseStatus } from "@emailjs/browser";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor() {}

  submitContactForm(event: Event): void {
    emailjs
      .sendForm(
        "service_q2f718q",
        "template_8flcdig",
        event.target as HTMLFormElement,
        "66zdtSDXODWqjk5mq"
      )
      .then((response) => console.log(response.text))
      .catch((err) => alert(err));
  }
}
