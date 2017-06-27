import { HeroesminePage } from './app.po';

describe('heroesmine App', () => {
  let page: HeroesminePage;

  beforeEach(() => {
    page = new HeroesminePage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
