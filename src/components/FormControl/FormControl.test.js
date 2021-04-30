// FormControl.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
// import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { FormControl } from "components/FormControl";
import { FormLabel } from "components/FormLabel";
import { Input } from "components/Input";

import {
    BasicInput,
    HelpText,
    ErrorText,
    DisabledInput,
    TextareaInput,
    FormCheckboxGroup,
    FormRadioGroup,
} from "./FormControl.stories";

it("renders in the primary state", () => {
    render(<BasicInput {...BasicInput.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("renders with helptext", () => {
    render(<HelpText {...HelpText.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
    expect(
        screen.getByText("We will never sell or distribute your email")
    ).toBeInTheDocument();
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

it("renders a FormControl-wrapped Input as disabled if Input (not FormControl) is marked disabled", () => {
    render(
        <FormControl id="first-name" invalidText="Please enter a First Name.">
            <FormLabel text="First Name" />
            <Input isDisabled />
        </FormControl>
    );
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

it("renders checkboxgroup as invalid style without FormLabel usage", () => {
    render(<FormCheckboxGroup {...FormCheckboxGroup.args} isInvalid />);
    expect(screen.queryAllByRole("checkbox").length).toBe(4);
    expect(screen.getByTestId("checkbox-group")).toHaveClass("error");
});

it("renders radiogroup as invalid style without FormLabel usage", () => {
    render(<FormRadioGroup {...FormRadioGroup.args} isInvalid />);
    expect(screen.queryAllByRole("radio").length).toBe(4);
    expect(screen.getByTestId("radio-group")).toHaveClass("error");
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
