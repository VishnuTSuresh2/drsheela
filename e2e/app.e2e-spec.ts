import { DrsheilaPage } from './app.po';

describe('drsheila App', () => {
  let page: DrsheilaPage;

  beforeEach(() => {
    page = new DrsheilaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
