import { Component, OnInit } from '@angular/core';
import { ListToAdoptService } from 'src/app/list-to-adopt.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.css']
})
export class ListKittenComponent implements OnInit { 

  listKittenAdopted;  /* Table to contain the adopted cat */

  constructor(private service : ListToAdoptService) { }

  ngOnInit() {
    this.listKittenAdopted = this.service.tableAdopt;
  }

}
