import React from "react";
import renderer from "react-test-renderer";
import { TouchableOpacity, Text } from "react-native";
import SubmitButton from "../SubmitButton";

describe("Testing SubmitButton component", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(<SubmitButton title="Submit" onPress={() => {}} style={{}} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("renders correctly with disabled flag", () => {
    const tree = renderer
      .create(
        <SubmitButton title="Submit" disabled onPress={() => {}} style={{}} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
