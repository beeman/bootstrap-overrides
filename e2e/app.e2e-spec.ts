import { BootstrapOverridesPage } from './app.po';

describe('bootstrap-overrides App', function() {
  let page: BootstrapOverridesPage;

  beforeEach(() => {
    page = new BootstrapOverridesPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
