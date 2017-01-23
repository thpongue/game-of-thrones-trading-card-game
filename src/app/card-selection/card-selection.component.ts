import { Component, OnInit } from '@angular/core';
import { CardData } from '../card-data';
import { CardsService } from '../cards.service';

@Component({
  selector: 'app-card-selection',
  templateUrl: './card-selection.component.html',
  styleUrls: ['./card-selection.component.css']
})
export class CardSelectionComponent implements OnInit {

  constructor(private cardsService: CardsService) { }

  ngOnInit() {
		this.getCardsData();
  }

  title: String = 'Card Selection';
	cardsData: CardData[];
	
	getCardsData() {
		return this.cardsService.getCards().subscribe(
			data => {
				this.cardsData = data;
			},
			err => console.log(err)
		);
	}
		
	hyphenate(value: String) : String {
		return value.replace(/ /g, '-');
	}
}
