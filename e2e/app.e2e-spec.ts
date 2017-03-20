import { MeanTapwallPage } from './app.po';

describe('mean-tapwall App', function() {
  let page: MeanTapwallPage;

  beforeEach(() => {
    page = new MeanTapwallPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
