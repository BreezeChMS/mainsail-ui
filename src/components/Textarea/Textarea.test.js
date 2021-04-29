// Textarea.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./Textarea.stories";

it("renders in the primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("renders as required", () => {
    render(<Primary {...Primary.args} isRequired={true} />);
    expect(screen.getByRole("textbox")).toBeRequired();
});

it("renders as disabled", () => {
    render(<Primary {...Primary.args} isDisabled={true} />);
    expect(screen.getByRole("textbox")).toBeDisabled();
});

it("renders as readonly", () => {
    render(<Primary {...Primary.args} isReadOnly={true} />);
    expect(screen.getByRole("textbox")).toHaveAttribute("readonly");
});

it("can accept default input callbacks handler", () => {
    let onChange = jest.fn();
    let onBlur = jest.fn();
    let onFocus = jest.fn();
    render(
        <Primary
            {...Primary.args}
            onChange={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
        />
    );

    let input = screen.getByRole("textbox");

    userEvent.click(input);
    expect(onFocus).toHaveBeenCalled();
    expect(input).toHaveFocus();
    userEvent.type(input, "h");
    expect(onChange).toHaveBeenCalled();
    userEvent.tab(input);
    expect(onBlur).toHaveBeenCalled();
});
