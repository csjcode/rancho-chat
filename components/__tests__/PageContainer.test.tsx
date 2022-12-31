import React from "react";
import renderer from "react-test-renderer";
import { Provider } from "react-redux";
import { store } from "../../store/store";

import PageContainer from "../PageContainer";

describe("<PageContainer />", () => {
  it("PageContainer renders correctly", () => {
    const tree = renderer
      .create(
        <Provider store={store}>
          <PageContainer />
        </Provider>
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
