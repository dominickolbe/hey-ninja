import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("renders app logo", () => {
  render(<App />);
  const element = screen.getByTestId("app-logo");
  expect(element).toBeInTheDocument();
});
