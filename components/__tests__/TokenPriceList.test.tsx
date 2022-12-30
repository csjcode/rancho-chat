import ReactTestRenderer from "react-test-renderer";
import TokenPriceList from "../TokenPriceList";

it("renders correctly", () => {
  const tree = ReactTestRenderer.create(<TokenPriceList />).toJSON();
  expect(tree).toMatchSnapshot();
});
