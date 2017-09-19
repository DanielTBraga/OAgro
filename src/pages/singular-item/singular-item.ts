import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { ItemApi } from '../../services/item-api.service';



/**
 * Generated class for the SingularItemPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-singular-item',
  templateUrl: 'singular-item.html',
  providers: [Http]
})
export class SingularItemPage {
  item: any;

    constructor(public navCtrl: NavController,
                private navParams: NavParams,
                private itemApi: ItemApi
                ){
                  this.item = this.navParams.data;
                  console.log(this.item)
                }


}
