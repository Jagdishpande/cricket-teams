import { Component } from '@angular/core';
import { cricketers } from './shared/const/players';
import { Iplayer } from './shared/models/data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = '';
  searchByValue!:string;

  playersArray : Iplayer[]=cricketers;
}
