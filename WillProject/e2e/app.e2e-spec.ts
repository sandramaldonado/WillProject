import { WillProjectPage } from './app.po';

describe('will-project App', function() {
  let page: WillProjectPage;

  beforeEach(() => {
    page = new WillProjectPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
