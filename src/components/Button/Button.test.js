// Button.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Primary, Loading } from "./Button.stories";

it("renders the button in the primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
});

it("renders the loading text if in loading state", () => {
    render(<Loading {...Loading.args} />);
    expect(screen.getByRole("button")).toHaveTextContent("Waiting");
});

it("fires a provided onClick handler", () => {
    let onClick = jest.fn();
    render(<Primary {...Primary.args} onClick={onClick} />);

    userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
});
