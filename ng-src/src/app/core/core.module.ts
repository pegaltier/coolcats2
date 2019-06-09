import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

// project component
import { AnchorsComponent } from './components/anchors/anchors.component';

// project service
import { HolochainService } from './services/holochain.service';

@NgModule({
  declarations: [AnchorsComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AnchorsComponent],
  providers: [
    HolochainService
  ]
})
export class CoreModule { }
