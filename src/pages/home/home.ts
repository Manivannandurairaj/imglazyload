import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';
import { LazyLoadImageDirective } from 'ng-lazyload-image';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [LazyLoadImageDirective]
})
export class HomePage {
  defaultImage = 'https://www.placecage.com/1000/1000';
  image = 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg';
  offset = 100;
  constructor(public navCtrl: NavController) {

  }

}
