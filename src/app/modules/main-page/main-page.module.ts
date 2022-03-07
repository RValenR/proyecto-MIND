import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MainBodyComponent } from './components/main-body/main-body.component';
import { MainHeaderComponent } from './components/main-header/main-header.component';
import {MenubarModule} from 'primeng/menubar';



@NgModule({
  declarations: [
    MainBodyComponent,
    MainHeaderComponent
  ],
  imports: [
    CommonModule,
    MenubarModule
  ]
})
export class MainPageModule { }
