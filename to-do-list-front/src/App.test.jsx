const { render } = require("@testing-library/react");
const { App } = "./App";
describe("Jest", () => {
  it("should work ", () => {
    expect(1).toBe(1);
  });

  it("should render ", () => {
    render(App);
  });
});
