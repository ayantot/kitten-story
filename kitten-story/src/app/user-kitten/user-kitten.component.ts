import { Component, OnInit } from '@angular/core';
import { ListToAdoptService } from 'src/app/list-to-adopt.service';


@Component({
  selector: 'app-user-kitten',
  templateUrl: './user-kitten.component.html',
  styleUrls: ['./user-kitten.component.css']
})
export class UserKittenComponent implements OnInit {
  
  listKitten;   /* Table to contain the created cat from the formPage */

  constructor(private service: ListToAdoptService) { }

  ngOnInit() {
    this.listKitten = this.service.tableKitten
  }

  addToAdopt(cat,i) {
    /*MOVE THE CAT CARD TO ADOPTION PAGE WITH THE SERVICE*/
    this.service.listToAdopt(cat);

    /*REMOVE THE SELECT CARD*/ 
    this.listKitten.splice(i,1);
  }

}
