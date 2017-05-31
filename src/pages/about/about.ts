import { Component, OnInit } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ItemService } from '../../services/itemservice';
import { List } from '../../models/list';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage implements OnInit{
lists : List[] =[];

  constructor(public navCtrl: NavController,
    private serviceCall: ItemService) {

  }

  ngOnInit() {
  this.serviceCall.fetchItem()
    .then(
      (lists: List[]) => this.lists = lists
    );

  }
}
