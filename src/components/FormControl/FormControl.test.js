// FormControl.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import {
    BasicInput,
    HelpText,
    ErrorText,
    DisabledInput,
    TextareaInput,
} from "./FormControl.stories";

it("renders in the primary state", () => {
    render(<BasicInput {...BasicInput.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("renders with helptext", () => {
    render(<HelpText {...HelpText.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText(HelpText.args.helpText)).toBeInTheDocument();
});

it("renders with error text", () => {
    render(<ErrorText {...ErrorText.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByText(ErrorText.args.invalidText)).toBeInTheDocument();
});

it("renders as disabled", () => {
    render(<DisabledInput {...DisabledInput.args} />);
    expect(screen.getByRole("textbox")).toBeDisabled();
});

it("renders with textarea", () => {
    render(<TextareaInput {...TextareaInput.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("renders with input as invalid", () => {
    render(<ErrorText {...ErrorText.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("error");
    expect(screen.getByText("First Name")).toHaveClass("error");
});

it("renders with textarea as invalid", () => {
    render(
        <TextareaInput
            {...TextareaInput.args}
            isInvalid
            invalidText="You forgot stuff"
        />
    );
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(screen.getByRole("textbox")).toHaveClass("error");
    expect(screen.getByText("Notes")).toHaveClass("error");
    expect(screen.getByText("You forgot stuff")).toBeInTheDocument();
});
