import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemService } from '../../services/itemservice';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

datas: any[] = [
  {title: 'Title 1', content : 'content 1'},
    {title: 'Title 2', content : 'content 2'},
      {title: 'Title 3', content : 'content 3'},
      {title: 'Title 4', content : 'content 4'},
        {title: 'Title 5', content : 'content 5'},
          {title: 'Title 6', content : 'content 6'}
];

  constructor(public navCtrl: NavController,
              public storeIt: ItemService) {

  }

  addItem(data){

 this.storeIt.storeItem(data.title, data.content);
  }
}
