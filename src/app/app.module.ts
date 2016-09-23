import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { MyNewComponentComponent } from './my-new-component/my-new-component.component';
import { MyNewComponent2Component } from './my-new-component2/my-new-component2.component';
import { MyNewComponent3Component } from './my-new-component3/my-new-component3.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';


@NgModule({
  declarations: [
    AppComponent,
    MyNewComponentComponent,
    MyNewComponent2Component,
    MyNewComponent3Component,
    HeroDetailComponent
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
