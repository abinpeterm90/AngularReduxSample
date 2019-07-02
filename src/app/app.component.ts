import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/Observable';

interface AppState {
  message: string;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularReduxSample';
  message$:Observable<string>
  constructor(private store:Store<AppState>) {
    this.message$=this.store.select('message');
  }
  
  changeState() {
    this.store.dispatch({type:'1'})
  }
}
