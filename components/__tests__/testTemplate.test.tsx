import renderer from "react-test-renderer";
import ReplyTo from "../ReplyTo";
import TokenPrice from "../TokenPrice";
describe("Template Test suite", () => {
  it("Test template", () => {
    expect(1 + 1).toEqual(2);
  });
});

// describe("Test suite", () => {
//   xit("renders correctly", () => {
//     // const mockProps = {
//     //   text: "This is a test message",
//     //   user: {
//     //     firstName: "John",
//     //     lastName: "Doe",
//     //   },
//     //   onCancel: jest.fn(),
//     // };
//     //  const tree = ReactTestRenderer.create(<ReplyTo {...mockProps} />).toJSON();
//     const tree = renderer.create(<TokenPrice />).toJSON();
//     expect(tree).toMatchSnapshot();
//   });
// });
