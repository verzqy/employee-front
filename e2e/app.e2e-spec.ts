import { EmployeeAppPage } from './app.po';

describe('employee-app App', () => {
  let page: EmployeeAppPage;

  beforeEach(() => {
    page = new EmployeeAppPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
