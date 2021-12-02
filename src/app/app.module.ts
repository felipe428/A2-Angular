import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

import { FelipeHomeComponent } from './felipe-home/felipe-home.component';
import { FelipeTasksComponent } from './felipe-tasks/felipe-tasks.component';

import { FelipeTasksService } from './felipe-tasks.service';

import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: 'home', component: FelipeHomeComponent },
      { path: 'tarefas', component: FelipeTasksComponent },
    ]),
    AngularFireModule.initializeApp({
      apiKey: 'AIzaSyDjgvemL4vDc6KE1GEoWrxgRdQ3du2x9xg',
      authDomain: 'a2-angular.firebaseapp.com',
      databaseURL: 'https://a2-angular-default-rtdb.firebaseio.com',
      projectId: 'a2-angular',
      storageBucket: 'a2-angular.appspot.com',
      messagingSenderId: '619045830518',
      appId: '1:619045830518:web:6d6bac9e10d00a5c208457',
    }),
    AngularFireDatabaseModule,
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    FelipeHomeComponent,
    FelipeTasksComponent,
  ],
  bootstrap: [AppComponent],
  providers: [FelipeTasksService],
})
export class AppModule {}
