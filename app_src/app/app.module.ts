import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }     from './app.component';
import {UserListComponent}  from './components/user-list.component';
import {UserAddComponent}   from './components/user-add.component';
import {UserEditComponent}  from './components/user-edit.component';

import {UserService} from './services/user.service';

const appRoutes: Routes = [
  { path: '',                     component: UserListComponent },
  { path: 'add',				  component: UserAddComponent },
  { path: 'edit/:id',             component: UserEditComponent }
];

@NgModule({
  imports:      [ 
	  BrowserModule,
	  HttpModule,
	  //ReactiveFormsModule,
	  FormsModule,
	  RouterModule.forRoot(appRoutes)
  ],
  declarations: [ 
	AppComponent,
	UserListComponent,
	UserAddComponent,
	UserEditComponent
  ],
  providers: [UserService],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
