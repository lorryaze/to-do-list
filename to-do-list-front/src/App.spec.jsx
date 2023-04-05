const { render } = require("@testing-library/react");
const { App } = "./App";
describe("Jest", () => {
  it("should render ", () => {
    render(App);
  });
});
