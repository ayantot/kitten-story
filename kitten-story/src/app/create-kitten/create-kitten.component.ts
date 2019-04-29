import { Component, OnInit } from '@angular/core';
import { Chat } from '../cat';
import { ListToAdoptService } from 'src/app/list-to-adopt.service';


@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.css']
})
export class CreateKittenComponent implements OnInit {

  nameKittenText: string;
  raceKittenText : string;
  bornKittenText: string;
  photoKittenText: string;
  cat: Chat;


  constructor(private service: ListToAdoptService) { }

  ngOnInit() {

    }
  
addKitten() {

  /*Creation of object cat*/ 
  this.cat = {
    name: this.nameKittenText,
    race: this.raceKittenText,
    born: this.bornKittenText,
    photo: this.photoKittenText
  };

  /*Push the cat's object in a table with list-to-adopt Service*/ 
  this.service.formToService(this.cat) 

  /*Reset the Form Empty*/ 
  this.nameKittenText = '';
  this.raceKittenText = '';
  this.bornKittenText = '';
  this.photoKittenText = '';
}

}
