// Checkbox.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Basic, DefaultChecked, IndeterminateGroup } from "./Checkbox.stories";
import { CheckboxGroup } from "./Checkbox";

it("renders the checkbox in the primary state", () => {
    render(<Basic {...Basic.args} text="Nifty" />);
    expect(screen.getByText("Nifty")).toBeInTheDocument();
});

it("renders the checkbox with default checked state", () => {
    render(<DefaultChecked text="Nifty" isDefaultChecked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
});

it("renders the checkbox with controlled checked state", () => {
    render(<DefaultChecked {...DefaultChecked.args} text="Nifty" isChecked />);
    expect(screen.getByRole("checkbox")).toBeChecked();
    expect(screen.getByRole("checkbox")).toHaveAttribute("readonly");
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

    userEvent.click(screen.getByRole("checkbox"));
    expect(onClick).toHaveBeenCalledWith("choice1");
});

it("can be rendered disabled", () => {
    render(<Basic {...Basic.args} isDisabled />);

    expect(screen.getByRole("checkbox")).toBeDisabled();
});

it("renders the checkbox in a group", () => {
    render(
        <CheckboxGroup>
            <Basic text="choice1" />
            <Basic text="choice2" />
        </CheckboxGroup>
    );
    expect(screen.getByText("choice1")).toBeInTheDocument();
    expect(screen.getByText("choice2")).toBeInTheDocument();
});

it("renders the checkbox in a group with a label", () => {
    render(
        <CheckboxGroup labelText="Fancy Label">
            <Basic text="choice1" />
            <Basic text="choice2" />
        </CheckboxGroup>
    );
    expect(screen.getByText("choice1")).toBeInTheDocument();
    expect(screen.getByText("choice2")).toBeInTheDocument();
    expect(screen.getByText("Fancy Label")).toBeInTheDocument();
});

it("can select multiples in a group", () => {
    render(
        <CheckboxGroup labelText="Fancy Label">
            <Basic text="choice1" />
            <Basic text="choice2" />
        </CheckboxGroup>
    );
    let choices = screen.getAllByRole("checkbox");
    // check both?
    userEvent.click(choices[0]);
    userEvent.click(choices[1]);
    expect(choices[0]).toBeChecked();
    expect(choices[1]).toBeChecked();

    // and uncheck one of them
    userEvent.click(choices[1]);
    expect(choices[1]).not.toBeChecked();
    expect(choices[0]).toBeChecked();
});

it("can handle indeterminate states properly", () => {
    // First child is pre-checked in this story!
    render(<IndeterminateGroup />);
    let choices = screen.getAllByRole("checkbox");

    expect(choices[0]).not.toBeChecked();
    expect(choices[0].indeterminate).toBe(true);
    expect(choices[1]).toBeChecked();

    // Let's deselect the first child
    userEvent.click(choices[1]);

    // Everything should be unchecked
    expect(choices[0]).not.toBeChecked();
    expect(choices[0].indeterminate).toBe(false);
    expect(choices[1]).not.toBeChecked();

    // Let's deselect the first child
    userEvent.click(choices[1]);
    userEvent.click(choices[2]);

    // Everything should be checked
    expect(choices[0]).toBeChecked();
    expect(choices[0].indeterminate).toBe(false);
    expect(choices[1]).toBeChecked();
    expect(choices[2]).toBeChecked();
});
