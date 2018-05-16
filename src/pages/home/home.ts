import { IonicPage, Platform, NavController } from 'ionic-angular';
import { Component, NgZone, ViewChild, ElementRef } from '@angular/core';
@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  recommendedSlides: Array<{ id: number | string, defaultImage: string, lazyloadImage: string }>;

  constructor(
    private platform: Platform,
    private ngZone: NgZone,
    private navCtrl: NavController,
  ) {
    // this.pltInitialize();
    this.recommendedSlides = [
      { id: 1, defaultImage: 'assets/imgs/default.jpg', lazyloadImage: 'assets/imgs/elastic.jpg' },
      { id: 2, defaultImage: 'assets/imgs/default.jpg', lazyloadImage: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg' },
      { id: 3, defaultImage: 'assets/imgs/default.jpg', lazyloadImage: 'https://images.unsplash.com/photo-1443890923422-7819ed4101c0?fm=jpg' }
    ];
  }
}
