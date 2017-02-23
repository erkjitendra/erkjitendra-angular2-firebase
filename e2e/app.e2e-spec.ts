import { SixthPage } from './app.po';

describe('sixth App', function() {
  let page: SixthPage;

  beforeEach(() => {
    page = new SixthPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
