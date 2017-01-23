export class CardData {

	constructor(obj?: any) {
		for (var key in obj) {
			this[key] = obj[key]
		}
	}

	Id: number;
	Name: string;
	IsFemale: boolean;
	Culture: string;
	Titles: string[];
	Aliases: string[];
	Born: string;
	Died: string;
	Father: CardData;
	Mother: CardData;
	Spouse: CardData;
	Allegiances: number[];
	Books: number[];
	PovBooks: number[];
	PlayedBy: string[];
	TvSeries: string[];
	imageUrlSmall: string;
	imageUrlLarge: string;
}
