import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project component
import { AnchorsComponent } from './components/anchors/anchors.component';

// project service
import { AnchorService } from './services/anchor.service';
import { HolochainService } from './services/holochain.service';
import { FavouriteService } from './services/favourite.service';
import { HandleService } from './services/handle.service';
import { PostService } from './services/post.service';
import { PropService } from './services/prop.service';

@NgModule({
  declarations: [AnchorsComponent],
  imports: [
    CommonModule
  ],
  exports: [AnchorsComponent],
  providers: [
    AnchorService,
    FavouriteService,
    HandleService,
    PostService,
    PropService,
    HolochainService
  ]
})
export class CoreModule { }
