import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Http } from '@angular/http';
import { CategoriaPage } from '../categoria/categoria';
import { ItemApi } from '../../services/item-api.service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [Http]
})
export class HomePage {
  items: any;

  constructor(public navCtrl: NavController,
    public params: NavParams,
    private itemApi: ItemApi ) {

  }
  ionViewDidLoad() {
    this.itemApi.getItems().then(data => this.items = data);
  }

  CategoriaTapped($event, categoria) {
    this.navCtrl.push(CategoriaPage, {
      categoria: 'Fruta'
    });
  }
  CategoriaTapped_2($event, categoria) {
    this.navCtrl.push(CategoriaPage, {
      categoria: 'Grão'
    });
  }
  CategoriaTapped_3($event, categoria){
    this.navCtrl.push(CategoriaPage,{
      categoria: 'Semente'
    });
  }

}
