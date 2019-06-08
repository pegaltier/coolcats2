import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// project component
import { AnchorsComponent } from './components/anchors/anchors.component';

// project service
import { AnchorService } from './services/anchor.service';
import { HolochainService } from './services/holochain.service';

@NgModule({
  declarations: [AnchorsComponent],
  imports: [
    CommonModule
  ],
  exports: [AnchorsComponent],
  providers: [
    AnchorService,
    HolochainService
  ]
})
export class CoreModule { }
