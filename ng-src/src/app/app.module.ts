import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


// project
import { AppRoutingModule } from './app-routing/app-routing.module';
import { AppStoreModule } from './app-store/app-store.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    // angular
    BrowserModule,

    // project
    AppRoutingModule,
    AppStoreModule,
    CoreModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
