import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

// project service
import { HolochainService } from './services/holochain.service';

// project component
import { AnchorsComponent } from './components/dev/anchors/anchors.component';
import { PropsComponent } from './components/dev/props/props.component';
import { HandlesComponent } from './components/dev/handles/handles.component';
import { PostsComponent } from './components/dev/posts/posts.component';
import { FavouritesComponent } from './components/dev/favourites/favourites.component';

@NgModule({
  declarations: [AnchorsComponent, PropsComponent, HandlesComponent, PostsComponent, FavouritesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AnchorsComponent, PropsComponent, HandlesComponent, PostsComponent, FavouritesComponent],
  providers: [
    HolochainService
  ]
})
export class CoreModule { }
