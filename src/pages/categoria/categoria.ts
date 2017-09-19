import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SingularItemPage } from '../singular-item/singular-item';
import { ItemApi } from '../../services/item-api.service';

/**
 * Generated class for the CategoriaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-categoria',
  templateUrl: 'categoria.html',
  providers: [Http]
})
export class CategoriaPage {

  items: any;
  passedCategoria: any;

  constructor(public navCtrl: NavController, 
              private navParams: NavParams,
              private itemApi: ItemApi,
              public loadingController: LoadingController) {
                this.passedCategoria = this.navParams.get('categoria');
  }

  ionViewDidLoad() {
    let loader = this.loadingController.create({
      content: "Obtendo itens..."
    });
    loader.present();

    this.itemApi.getItems().then(data => {
      loader.dismiss();
      this.items = data;
      this.items = this.items.filter(item => item.categoria == this.passedCategoria);
    })
  }

  itemTapped($event, item){
    this.navCtrl.push(SingularItemPage, item);
  }

}
