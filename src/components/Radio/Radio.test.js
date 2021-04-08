// Radio.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Basic, DefaultChecked } from "./Radio.stories";

it("renders the radio in the primary state", () => {
    render(<Basic {...Basic.args} text="Nifty" />);
    expect(screen.getByText("Nifty")).toBeInTheDocument();
});

it("renders the radio with default checked state", () => {
    render(
        <DefaultChecked
            {...DefaultChecked.args}
            text="Nifty"
            isDefaultChecked
        />
    );
    expect(screen.getByRole("radio")).toBeChecked();
});

it("renders the radio with controlled checked state", () => {
    render(<DefaultChecked {...DefaultChecked.args} text="Nifty" isChecked />);
    expect(screen.getByRole("radio")).toBeChecked();
    expect(screen.getByRole("radio")).toHaveAttribute("readonly");
});

it("fires a provided onChange handler", () => {
    let onClick = jest.fn();
    render(
        <Basic
            {...Basic.args}
            name="choice"
            value="choice1"
            onChange={(e) => onClick(e.target.value)}
        />
    );

    userEvent.click(screen.getByRole("radio"));
    expect(onClick).toHaveBeenCalledWith("choice1");
});

it("can be rendered disabled", () => {
    render(<Basic {...Basic.args} isDisabled />);

    expect(screen.getByRole("radio")).toBeDisabled();
});
