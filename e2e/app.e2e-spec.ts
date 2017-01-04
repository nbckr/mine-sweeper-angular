import { MineSweeperAngularPage } from './app.po';

describe('mine-sweeper-angular App', function() {
  let page: MineSweeperAngularPage;

  beforeEach(() => {
    page = new MineSweeperAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
