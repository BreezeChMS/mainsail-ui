// Radio.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Basic, DefaultChecked } from "./Radio.stories";
import { RadioGroup } from "./Radio";

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

it("renders the radio in a group", () => {
    render(
        <RadioGroup>
            <Basic text="choice1" name="choices" />
            <Basic text="choice2" name="choices" />
        </RadioGroup>
    );
    expect(screen.getByText("choice1")).toBeInTheDocument();
    expect(screen.getByText("choice2")).toBeInTheDocument();
});

it("renders the radio in a group with a label", () => {
    render(
        <RadioGroup labelText="Fancy Label">
            <Basic text="choice1" />
            <Basic text="choice2" />
        </RadioGroup>
    );
    expect(screen.getByText("choice1")).toBeInTheDocument();
    expect(screen.getByText("choice2")).toBeInTheDocument();
    expect(screen.getByText("Fancy Label")).toBeInTheDocument();
});

it("can only select one in a group", () => {
    render(
        <RadioGroup labelText="Fancy Label">
            <Basic name="choices" text="choice1" />
            <Basic name="choices" text="choice2" />
        </RadioGroup>
    );
    let choices = screen.getAllByRole("radio");
    userEvent.click(choices[0]);
    expect(choices[0]).toBeChecked();
    expect(choices[1]).not.toBeChecked();

    userEvent.click(choices[1]);
    expect(choices[0]).not.toBeChecked();
    expect(choices[1]).toBeChecked();
});
