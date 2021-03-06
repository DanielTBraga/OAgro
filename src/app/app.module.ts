import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';


import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CategoriaPage } from '../pages/categoria/categoria';
import { ListaPage } from '../pages/lista/lista';
import { SingularItemPage } from '../pages/singular-item/singular-item';
import { HttpModule } from '@angular/http';
import { ItemApi } from '../services/item-api.service';

@NgModule({
  declarations: [
    MyApp,
    CategoriaPage,
    ListaPage,
    SingularItemPage,
    HomePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    CategoriaPage,
    ListaPage,
    SingularItemPage,
    HomePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    ItemApi,
    HttpModule
  ]
})
export class AppModule {}
