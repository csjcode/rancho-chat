import React from "react";
import renderer from "react-test-renderer";
import Input from "../Input";
import { Provider } from "react-redux";
import { store } from "../../store/store";

describe("Input component", () => {
  test("Input component renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
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
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
