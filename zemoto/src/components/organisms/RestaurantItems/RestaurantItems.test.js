import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
import RestaurantItems from "./RestaurantItems";
import renderer from "react-test-renderer";

it("renders RestaurantItems snapshot correctly", () => {
  const tree = renderer
    .create(
      <BrowserRouter>
        <RestaurantItems />
      </BrowserRouter>
    )
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it("renders RestaurantItems without crashing", () => {
  const div = document.createElement("div");
  ReactDOM.render(
    <BrowserRouter>
      <RestaurantItems />
    </BrowserRouter>,
    div
  );
});
