import { GameOfThronesTradingCardGamePage } from './app.po';

describe('game-of-thrones-trading-card-game App', function() {
  let page: GameOfThronesTradingCardGamePage;

  beforeEach(() => {
    page = new GameOfThronesTradingCardGamePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
