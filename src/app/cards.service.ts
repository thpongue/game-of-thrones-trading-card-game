import { Injectable } from '@angular/core';
import { CardData } from './card-data';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

@Injectable()
export class CardsService {

  constructor() { }

	getCards(): Observable<CardData[]> {
		
		var data: CardData[] = new Array<CardData>();
		var current: CardData;

		for (var key in CARDDATA) {
			current = new CardData(CARDDATA[key]);
			data.push(current);
		}
		return Observable.of(data);
			//return this.http.get("api/cards").map(res => res.text());
			//fromJson(JSON.parse(data));
	}

}

const CARDDATA = [
	{"Id":583,"Name":"Jon Snow","IsFemale":false,"Culture":"Northmen","Titles":["Lord Commander of the Night's Watch"],"Aliases":["Lord Snow","Ned Stark's Bastard","The Snow of Winterfell","The Crow-Come-Over","The 998th Lord Commander of the Night's Watch","The Bastard of Winterfell","The Black Bastard of the Wall","Lord Crow"],"Born":"In 283 AC","Died":"","Father":null,"Mother":null,"Spouse":null,"Children":[],"Allegiances":[362],"Books":[5],"PovBooks":[1,2,3,8],"PlayedBy":["Kit Harington"],"TvSeries":["Season 1","Season 2","Season 3","Season 4","Season 5", "Season 6"],"imageUrlSmall":"assets/images/jon_snow100x100.jpg","imageUrlLarge":"assets/images/jon_snow500x500.jpg"},
	{"Id":2,"Name":"Walder","IsFemale":false,"Culture":"","Titles":[],"Aliases":["Hodor"],"Born":"","Died":"","Father":null,"Mother":null,"Spouse":null,"Children":[],"Allegiances":[362],"Books":[1,2,3,5,8],"PovBooks":[],"PlayedBy":["Kristian Nairn"],"TvSeries":["Season 1","Season 2","Season 3","Season 4", "Season 6"],"imageUrlSmall":"assets/images/hodor100x100.jpg","imageUrlLarge":"assets/images/hodor100x100.jpg"},
	{"Id":565,"Name":"Joffrey Baratheon","IsFemale":false,"Culture":"","Titles":["King of the Andals, the Rhoynar and the First Men","Lord of the Seven Kingdoms","Protector of the Realm"],"Aliases":["Joffrey the Illborn","The Young Usurper","Aerys the Third","Joffrey-called-Baratheon"],"Born":"286 AC, at King's Landing","Died":"300 AC, at Red Keep, King's Landing","Father":901,"Mother":238,"Spouse":16,"Children":[],"Allegiances":[],"Books":[1,2,3,5,8],"PovBooks":[],"PlayedBy":["Jack Gleeson"],"TvSeries":["Season 1","Season 2","Season 3","Season 4"],"imageUrlSmall":"assets/images/joffrey_baratheon100x100.jpg","imageUrlLarge":"assets/images/joffrey_baratheon100x100.jpg"},
	{"Id":955,"Name":"Sandor Clegane","IsFemale":false,"Culture":"","Titles":[],"Aliases":["The Hound","Dog"],"Born":"In 270 AC or 271 AC","Died":"In 300 AC (supposedly)","Father":null,"Mother":null,"Spouse":null,"Children":[],"Allegiances":[72,229],"Books":[1,2,3,5,8],"PovBooks":[],"PlayedBy":["Rory McCann"],"TvSeries":["Season 1","Season 2","Season 3","Season 4", "Season 6"],"imageUrlSmall":"assets/images/sandor_clegane100x100.jpg","imageUrlLarge":"assets/images/sandor_clegane100x100.jpg"},
	{"Id":954,"Name":"Samwell Tarly","IsFemale":false,"Culture":"","Titles":[],"Aliases":["Sam"],"Born":"","Died":"","Father":null,"Mother":null,"Spouse":null,"Children":[],"Allegiances":[],"Books":[],"PovBooks":[],"PlayedBy":[""],"TvSeries":[],"imageUrlSmall":"assets/images/samwell_tarly100x100.jpg","imageUrlLarge":"assets/images/samwell_tarly100x100.jpg"},
	{"Id":1052,"Name":"Tyrion Lannister","IsFemale":false,"Culture":"","Titles":["Acting Hand of the King (former)","Master of Coin (former)"],"Aliases":["The Imp","Halfman","The boyman","Giant of Lannister","Lord Tywin's Doom","Lord Tywin's Bane","Yollo","Hugor Hill","No-Nose","Freak","Dwarf"],"Born":"In 273 AC, at Casterly Rock","Died":"","Father":null,"Mother":null,"Spouse":2044,"Children":[],"Allegiances":[229],"Books":[5,11],"PovBooks":[1,2,3,8],"PlayedBy":["Peter Dinklage"],"TvSeries":["Season 1","Season 2","Season 3","Season 4","Season 5", "Season 6"],"imageUrlSmall":"assets/images/tyrion_lannister100x100.jpg","imageUrlLarge":"assets/images/tyrion_lannister100x100.jpg"},
	{"Id":1303,"Name":"Daenerys Targaryen","IsFemale":true,"Culture":"Valyrian","Titles":["Queen of the Andals and the Rhoynar and the First Men, Lord of the Seven Kingdoms","Khaleesi of the Great Grass Sea","Breaker of Shackles/Chains","Queen of Meereen","Princess of Dragonstone"],"Aliases":["Dany","Daenerys Stormborn","The Unburnt","Mother of Dragons","Mother","Mhysa","The Silver Queen","Silver Lady","Dragonmother","The Dragon Queen","The Mad King's daughter"],"Born":"In 284 AC, at Dragonstone","Died":"","Father":null,"Mother":null,"Spouse":1346,"Children":[],"Allegiances":[378],"Books":[5],"PovBooks":[1,2,3,8],"PlayedBy":["Emilia Clarke"],"TvSeries":["Season 1","Season 2","Season 3","Season 4","Season 5", "Season 6"],"imageUrlSmall":"assets/images/daenerys_targaryen100x100.jpg","imageUrlLarge":"assets/images/daenerys_targaryen100x100.jpg"},
	{"Id":216,"Name":"Brienne of Tarth","IsFemale":true,"Culture":"","Titles":[],"Aliases":["The Maid of Tarth","Brienne the Beauty","Brienne the Blue"],"Born":"In 280 AC","Died":"","Father":null,"Mother":null,"Spouse":null,"Children":[],"Allegiances":[380,17,362],"Books":[2,3,8],"PovBooks":[5],"PlayedBy":["Gwendoline Christie"],"TvSeries":["Season 2","Season 3","Season 4","Season 5", "Season 6"],"imageUrlSmall":"assets/images/brienne_of_tarth100x100.jpg","imageUrlLarge":"assets/images/brienne_of_tarth100x100.jpg"},
	{"Id":238,"Name":"Cersei Lannister","IsFemale":true,"Culture":"Westerman","Titles":["Light of the West","Queen Dowager","Protector of the Realm","Lady of Casterly Rock","Queen Regent"],"Aliases":["Brotherfuckerthe bitch queen"],"Born":"In 266 AC, at Casterly Rock","Died":"","Father":null,"Mother":null,"Spouse":901,"Children":[],"Allegiances":[229],"Books":[1,2,3],"PovBooks":[5,8],"PlayedBy":["Lena Headey"],"TvSeries":["Season 1","Season 2","Season 3","Season 4","Season 5", "Season 6"],"imageUrlSmall":"assets/images/cersei_lannister100x100.jpg","imageUrlLarge":"assets/images/cersei_lannister100x100.jpg"},
	{"Id":1346,"Name":"Drogo","IsFemale":false,"Culture":"Dothraki","Titles":["Khal"],"Aliases":["Great Rider","Great Khal"],"Born":"In or around 267 AC","Died":"In 298 AC, at Dothraki sea","Father":null,"Mother":null,"Spouse":1303,"Children":[],"Allegiances":[],"Books":[1,2,3,8],"PovBooks":[],"PlayedBy":["Jason Momoa"],"TvSeries":["Season 1","Season 2"], "imageUrlSmall":"assets/images/drogo100x100.jpg","imageUrlLarge":"assets/images/drogo100x100.jpg"}
]
