import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpModule }      from '@angular/http';
import { FormsModule }   from '@angular/forms';

//import {HttpHeaders} from '@angular/common/http';



import { AppComponent }  from './app.component';
import { UserComponent }  from './components/user.component';

@NgModule({
  imports:      [ BrowserModule,HttpModule,FormsModule],
  declarations: [ AppComponent,UserComponent],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
