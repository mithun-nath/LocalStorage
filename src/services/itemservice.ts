import { Storage } from '@ionic/storage';
import { List } from '../models/list';
import { Injectable } from '@angular/core'

@Injectable()

export class ItemService {

  private lists: List[] = [];

  constructor(private storage: Storage) { }

  storeItem(title: string, content: string) {
    console.log('from service', title, content);
    const list = new List(title, content);
    this.lists.push(list);
    this.storage.set('lists', this.lists)
      .then()
      .catch(
      err => {
        this.lists.splice(this.lists.indexOf(list), 1);
      }
    );
  } //end of storeItem()

fetchItem(){
  return this.storage.get('lists')
  .then(
    (lists: List[]) =>{
      this.lists = lists != null ? lists : [];
      return this.lists;
    }
  )
  .catch(
    err => console.log(err)
  );
} //end of fetchItem()

}
