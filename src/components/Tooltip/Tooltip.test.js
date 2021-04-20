// Tooltip.test.js

import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Simple, WithChildren, Disabled } from "./Tooltip.stories";

it("renders the tooltip in the Simple form with built-in icon", async () => {
    render(<Simple {...Simple.args} />);
    let hoverable = screen.getByRole("img");

    act(() => userEvent.hover(hoverable));

    let tip = screen.getByTestId("tooltip");

    expect(tip).toBeInTheDocument();
});

it("can wrap another component for ultra tooltip flexibility", () => {
    render(<WithChildren {...WithChildren.args} />);
    let hoverableButton = screen.getByRole("button");
    act(() => userEvent.hover(hoverableButton));

    expect(screen.getByTestId("tooltip")).toBeInTheDocument();
});

it("can be disabled and prevent (override) visibility", () => {
    render(<Disabled {...Disabled.args} isVisible={true} />);
    let hoverableButton = screen.getByRole("button");
    act(() => userEvent.hover(hoverableButton));

    expect(screen.queryByTestId("tooltip")).not.toBeInTheDocument();
});
