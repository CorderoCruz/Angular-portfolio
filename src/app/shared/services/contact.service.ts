import { Injectable } from "@angular/core";
import {} from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ContactService {
  constructor() {}

  submitContactForm(form: any): void {
    console.log(form);
  }
}
