import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';

//"Shared" is a sub-module that we can export to others sub-modules

@NgModule({
  declarations: [
    HeaderComponent
  ],
  exports: [ //Components that we want to export to other modules
    HeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
