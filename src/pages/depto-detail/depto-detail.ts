import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { InfoCatProvider } from './../../providers/sgtur/infoCat';

@IonicPage()
@Component({
  selector: 'page-depto-detail',
  templateUrl: 'depto-detail.html',
})
export class DeptoDetailPage {

	deptoDetail: any;
	constructor(
		public navCtrl: NavController, 
		public navParams: NavParams,
		private infoCat: InfoCatProvider
		) {
		console.log("uniq", this.deptoDetail);
		this.deptoDetail = this.navParams.get('depto');
	}

	ionViewDidLoad(){
		this.getDetailDepto();
	}

	getDetailDepto(){
		this.infoCat.getDptoUnique(this.deptoDetail.pk).subscribe(data => {
			this.deptoDetail = data;
			console.log("fals", this.deptoDetail)
		});
	}
}