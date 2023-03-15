import { Component, OnInit } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { GoogleAuthProvider } from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = 'portfolio';

  constructor(private auth: AngularFireAuth) {}

  displayName = new BehaviorSubject<any>(null);

  googleAuth() {
    return this.AuthLogin(new GoogleAuthProvider());
  }

  async AuthLogin(provider: any) {
    return this.auth
      .signInWithPopup(provider)
      .then((result) => {
        this.stateChanged();
      })
      .catch((err) => {
        console.log('hello');
      });
  }

  stateChanged() {
    this.auth.onAuthStateChanged((user) => {
      if (user) {
        this.displayName.next(user.displayName);
      } else {
      }
    });
  }

  logout() {
    this.auth.signOut().then(() => {
      this.displayName.next(false);
    });
  }
  ngOnInit() {
    this.stateChanged();
  }
}
