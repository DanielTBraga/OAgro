import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SingularItemPage } from '../singular-item/singular-item';
import { ItemApi } from '../../services/item-api.service';

/**
 * Generated class for the ListaPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-lista',
  templateUrl: 'lista.html',
  providers: [Http]
})
export class ListaPage {
  items: any;

  constructor(public navCtrl: NavController,
    public params: NavParams,
    private itemApi: ItemApi,
    public loadingController: LoadingController) {
  }

  ionViewDidLoad() {
    
        let loader = this.loadingController.create({
          content: "Getting items.."
        });
        loader.present();
    
        this.itemApi.getItems().then(data => {
            loader.dismiss();
            this.items = data
        });
      }
    

      getItems(searchbar) {
    

        var q = searchbar.srcElement.value;
    

        if (!q) {
    

          let loader = this.loadingController.create({
            content: "Getting items.."
          });
          loader.present();
    

          this.itemApi.getItems().then(data => {
            loader.dismiss();
            this.items = data
          });
        }
    
        this.items = this.items.filter((v) => {
          if(v.titulo && q) {
            if (v.titulo.toLowerCase().indexOf(q.toLowerCase()) > -1) {
              return true;
            }
            return false;
          }
        });
      }

      itemTapped($event, item) {
        this.navCtrl.push(SingularItemPage, item);

}
}
