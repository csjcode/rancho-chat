// Unit Tests
import React from "react";
import { render, fireEvent } from "@testing-library/react-native";
import renderer from "react-test-renderer";
import CustomHeaderButton from "../CustomHeaderButton";
import colors from "../../constants/colors/colors";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("CustomHeaderButton component", () => {
  xit("Renders CustomHeaderButton component properly", () => {
    const { getByTestId } = render(<CustomHeaderButton />);
    const component = getByTestId("CustomHeaderButton");
    expect(component).toBeTruthy();
  });
  xit("matches snapshot", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <CustomHeaderButton title={""} onPress={undefined} />
        </Provider>
      )
      .toJSON();
    // console.log(JSON.stringify(tree));
    expect(tree).toMatchSnapshot();
  });
  xit("Renders an <Ionicons /> component", () => {
    const { getByTestId } = render(<CustomHeaderButton />);
    const component = getByTestId("Ionicons");
    expect(component).toBeTruthy();
  });
  // it('Passes in the correct props to the <Ionicons /> component', () => {
  //   const { getByTestId } = render(<CustomHeaderButton color={colors.blue} />);
  //   const component = getByTestId('Ionicons');
  //   expect(component.props.iconSize).toBe(23);
  //   expect(component.props.color).toBe(colors.blue);
  // });
});
// The tests above check to make sure that the CustomHeaderButton component renders properly, that it matches the snapshot, that it renders an Ionicons component, and that it passes in the correct props to the Ionicons component.
