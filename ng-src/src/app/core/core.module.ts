import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

// project component
import { AnchorsComponent } from './components/anchors/anchors.component';

// project service
import { AnchorService } from '../app-store/services/entities/anchor.service';
import { HolochainService } from './services/holochain.service';
import { FavouriteService } from '../app-store/services/entities/favourite.service';
import { HandleService } from '../app-store/services/entities/handle.service';
import { PostService } from '../app-store/services/entities/post.service';
import { PropService } from '../app-store/services/entities/prop.service';

@NgModule({
  declarations: [AnchorsComponent],
  imports: [
    CommonModule,
    FormsModule
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
