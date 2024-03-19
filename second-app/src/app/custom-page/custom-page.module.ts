import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { CustomPagePageRoutingModule } from './custom-page-routing.module';
import { CustomPageWithId } from './custom-page-with-id/custom-page-with-id';
import { CustomPagePage } from './custom-page.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CustomPagePageRoutingModule
  ],
  declarations: [
    CustomPagePage,
    CustomPageWithId
  ]
})
export class CustomPagePageModule {}
