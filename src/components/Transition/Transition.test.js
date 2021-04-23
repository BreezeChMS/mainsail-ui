// Transition.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";


import { Primary } from "./Transition.stories";

it("renders the transition in the primary state", () => {
  render(<Primary {...Primary.args} />);
  expect(screen.getByRole("")).toHaveTextContent("Primary");
});

it("fires a provided onClick handler", () => {
    let onClick = jest.fn();
    render(<Primary {...Primary.args} onClick={onClick} />);

    userEvent.click(screen.getByRole(""));
    expect(onClick).toHaveBeenCalled();
});
