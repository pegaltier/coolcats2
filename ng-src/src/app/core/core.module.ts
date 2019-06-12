import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// lib
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// project service
import { HolochainService } from './services/holochain.service';

// project component
import { AnchorsComponent } from './components/dev/anchors/anchors.component';
import { HandlesComponent } from './components/dev/handles/handles.component';
import { PostsComponent } from './components/dev/posts/posts.component';
import { FavouritesComponent } from './components/dev/favourites/favourites.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DevComponent } from './components/dev/dev.component';

// project directive
import { ImgFallbackDirective } from './directives/img.fallback.directive';

@NgModule({
  declarations: [
    AnchorsComponent, HandlesComponent, PostsComponent, FavouritesComponent, HomeComponent, HeaderComponent, FooterComponent, DevComponent,
    ImgFallbackDirective
  
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [AnchorsComponent, HandlesComponent, PostsComponent, FavouritesComponent, HomeComponent, HeaderComponent, FooterComponent, DevComponent, ImgFallbackDirective],
  providers: [
    HolochainService
  ]
})
export class CoreModule { }
