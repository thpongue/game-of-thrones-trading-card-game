import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css']
})
export class CardSelectionComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  title: String = 'Card Selection';
	
	// TODO: use real data
	// TODO: no test - this is temporary
	cardsData : any[] = [
		{name: 'Jon Snow', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO1', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO2', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO3', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO4', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO5', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO6', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO7', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO8', imageUrl: 'assets/images/jon_snow.jpg'},
		{name: 'TODO9', imageUrl: 'assets/images/jon_snow.jpg'}
	];

	hyphenate(value: String) : String {
		return value.replace(/ /g, '-');
	}
}
