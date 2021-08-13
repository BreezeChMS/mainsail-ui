// SearchInput.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Basic, WithClearButton } from "./SearchInput.stories";

it("renders the searchinput in the Basic state", () => {
    render(<Basic {...Basic.args} />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
});

it("fires a provided onChange handler", () => {
    let onChange = jest.fn();
    render(<WithClearButton {...WithClearButton.args} onChange={onChange} />);

    userEvent.type(screen.getByRole("textbox"), "test");
    expect(onChange).toBeCalledTimes(4);
});

it("can be cleared with the clear button", () => {
    render(<WithClearButton {...WithClearButton.args} />);

    userEvent.type(screen.getByRole("textbox"), "test");

    expect(screen.getByRole("textbox").value).toBe("test");

    userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("textbox").value).toBe("");
});

it("can fire the onClear callback when cleared", () => {
    let onClear = jest.fn();
    render(<WithClearButton {...WithClearButton.args} onClear={onClear} />);

    userEvent.type(screen.getByRole("textbox"), "test");

    expect(screen.getByRole("textbox").value).toBe("test");

    userEvent.click(screen.getByRole("button"));

    expect(screen.getByRole("textbox").value).toBe("");
    expect(onClear).toBeCalledTimes(1);
});
