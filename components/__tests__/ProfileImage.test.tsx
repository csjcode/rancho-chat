import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import ProfileImage from "../ProfileImage";

describe("<ProfileImage />", () => {
  it("renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <ProfileImage size={50} uri="testUrl" userId="testUserId" />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
