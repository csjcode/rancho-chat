import React from "react";
import renderer from "react-test-renderer";
import Input from "./Input";

test("Input component renders correctly", () => {
  const tree = renderer
    .create(
      <Input
        initialValue="Test value"
        label="Test label"
        icon="testIcon"
        iconPack="testIconPack"
        iconSize={15}
        addStyles={{ testStyle: "testValue" }}
        onInputChanged={() => {}}
        errorText={["Test error"]}
        id={1}
      />
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});
