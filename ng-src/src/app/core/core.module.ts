import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';  
import { CommonModule } from '@angular/common';

// project service
import { HolochainService } from './services/holochain.service';

// project component
import { AnchorsComponent } from './components/anchors/anchors.component';
import { PropsComponent } from './components/props/props.component';
import { HandlesComponent } from './components/handles/handles.component';

@NgModule({
  declarations: [AnchorsComponent, PropsComponent, HandlesComponent],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [AnchorsComponent, PropsComponent, HandlesComponent],
  providers: [
    HolochainService
  ]
})
export class CoreModule { }
