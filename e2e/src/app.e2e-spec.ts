import { AppPage } from "./app.po";

describe("workspace-project App", () => {
  let page: AppPage;

  beforeEach(() => {
    page = new AppPage();
  });

  it("should display Server Name text", () => {
    page.navigateTo();
    expect(page.getServernameText()).toEqual("Server Name");
  });
});
