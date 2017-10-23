import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from 'ionic-angular';

import { GoogleMapComponent } from './google-map/google-map';


@NgModule({
	declarations: [
		GoogleMapComponent
	],
	imports: [
		CommonModule, 
		IonicModule.forRoot(GoogleMapComponent)
	],
	exports: [
		GoogleMapComponent
	]
})
export class ComponentsModule {}
