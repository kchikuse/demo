import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HelloTopBarComponent } from './components/hello-top-bar/hello-top-bar.component';
import { HelloContentComponent } from './components/hello-content/hello-content.component';
import { HelloBottomBarComponent } from './components/hello-bottom-bar/hello-bottom-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloTopBarComponent,
    HelloContentComponent,
    HelloBottomBarComponent
  ],
  imports: [
    BrowserModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
