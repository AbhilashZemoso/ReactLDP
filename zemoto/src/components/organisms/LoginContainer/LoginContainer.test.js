import React from "react";
import ReactDOM from "react-dom";
import { render, fireEvent, cleanup } from "@testing-library/react";
import "@testing-library/jest-dom";
import LoginContainer from "./LoginContainer";

afterEach(cleanup);

it("renders LoginContainer without crashing", () => {
  const div = document.createElement("div");
  const props = {
    setDisplay: () => true,
    setOtherDisplay: () => true,
  };
  ReactDOM.render(<LoginContainer props />, div);
});

it("renders LoginContainer correctly with email and password", () => {
  const props = {
    setDisplay: (something) => something,
    setOtherDisplay: (something) => something,
  };
  const { getByTestId } = render(<LoginContainer props />);
  const email = getByTestId("email").querySelector("input");
  fireEvent.change(email, { target: { value: "abhilash@gmail.com" } });
  expect(email.value).toEqual("abhilash@gmail.com");
  const password = getByTestId("password").querySelector("input");
  fireEvent.change(password, { target: { value: "Password123" } });
  expect(password.value).toEqual("Password123");
  fireEvent.click(getByTestId("button"));
});

it("renders LoginContainer continue with google button", () => {
  const props = {
    setDisplay: (something) => something,
    setOtherDisplay: (something) => something,
  };
  const { getByTestId } = render(<LoginContainer props />);
  expect(getByTestId("googleLogin")).toBeDefined();
});

it("renders LoginContainer Sign up button", () => {
  const props = {
    setDisplay: (something) => something,
    setOtherDisplay: (something) => something,
  };
  const { getByTestId } = render(<LoginContainer props />);
  expect(getByTestId("signUp")).toBeDefined();
});
