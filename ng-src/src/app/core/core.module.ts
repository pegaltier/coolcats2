import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// lib
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


// project service
import { HolochainService } from './services/holochain.service';

// project component
import { AnchorsComponent } from './components/dev/anchors/anchors.component';
import { PropsComponent } from './components/dev/props/props.component';
import { HandlesComponent } from './components/dev/handles/handles.component';
import { PostsComponent } from './components/dev/posts/posts.component';
import { FavouritesComponent } from './components/dev/favourites/favourites.component';
import { HomeComponent } from './components/home/home.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DevComponent } from './components/dev/dev.component';

@NgModule({
  declarations: [AnchorsComponent, PropsComponent, HandlesComponent, PostsComponent, FavouritesComponent, HomeComponent, HeaderComponent, FooterComponent, DevComponent],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule
  ],
  exports: [AnchorsComponent, PropsComponent, HandlesComponent, PostsComponent, FavouritesComponent, HomeComponent, HeaderComponent, FooterComponent, DevComponent],
  providers: [
    HolochainService
  ]
})
export class CoreModule { }
