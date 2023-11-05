import { Injectable } from "@angular/core";
import emailjs from "@emailjs/browser";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor() {}

  submitContactForm(event: Event) {
    return emailjs.sendForm("service_q2f718q", "template_8flcdig", event.target as HTMLFormElement, "66zdtSDXODWqjk5mq").catch((err) => err);
  }
}
