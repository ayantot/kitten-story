import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ListToAdoptService {

  constructor() { }

  tableKitten = [];
  tableAdopt = [];

/*Function: push the object Chat into the tableKiten. Use on the ListKittenPage*/ 

formToService(item) {
  this.tableKitten.push(item);
  console.log(this.tableKitten);
}

/*Function: push the object Chat into the tableAdopt. Use on the adoptKittenPage*/ 

listToAdopt(cat) {
this.tableAdopt.push(cat);
console.log(this.tableAdopt)
}

}
