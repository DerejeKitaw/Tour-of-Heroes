import { ProjectListPage } from './app.po';

describe('project-list App', function() {
  let page: ProjectListPage;

  beforeEach(() => {
    page = new ProjectListPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
