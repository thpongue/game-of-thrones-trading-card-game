import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardsService } from '../cards.service';
import { CardData } from '../card-data';

@Component({
  selector: 'app-card-detail',
  templateUrl: './card-detail.component.html',
  styleUrls: ['./card-detail.component.css']
})
export class CardDetailComponent implements OnInit {

  constructor(private route: ActivatedRoute, private cardsService: CardsService) { }

	ngOnInit() {
		this.getCardsData();

		if (this.route.params) { // cheat to make testing easier - remove
			this.route.params.subscribe(params => {
				if (params['Id']) {
					var filtered = this.cardsData.filter(function(e) {
						return e.Id == params['Id'];
					});
					this.cardData = filtered[0];
				}
			});
		}
	}

	// make this work then tidy up and test
	getCardsData() {
		return this.cardsService.getCards().subscribe(
			data => {
				this.cardsData = data;
			},
			err => console.log(err)
		);
	}
	
	cardsData: CardData[];
	cardData: CardData = new CardData();
  title: String = 'Card Detail';
}
