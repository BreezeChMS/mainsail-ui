// Dropdown.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import {
    Basic,
    ControlledSelection,
    NativeDropdown,
    Disabled,
    CustomTrigger,
    ComponentOptions,
} from "./Dropdown.stories";

it("renders the closed dropdown in the closed state", async () => {
    render(<Basic {...Basic.args} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
});

it("renders the closed dropdown with a default placeholder", async () => {
    render(<Basic {...Basic.args} />);
    expect(screen.getByRole("button").textContent).toBe("Select Option");
});

it("can open dropdown with a click", async () => {
    render(<Basic {...Basic.args} />);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
        expect(screen.getByRole("listbox")).toBeInTheDocument();
    });
});

it("can render an accurate list length", async () => {
    render(<Basic {...Basic.args} />);

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
        expect(screen.queryAllByRole("listitem").length).toBe(4);
    });
});

it("can render with a pre-selected value", async () => {
    render(<ControlledSelection {...ControlledSelection.args} />);
    expect(screen.getByRole("button").textContent).toBe(
        ControlledSelection.args.options[1].text
    );

    userEvent.click(screen.getByRole("button"));

    await waitFor(() => {
        expect(
            screen.queryAllByRole("listitem")[1].classList.contains("active")
        ).toBe(true);
    });
});

it("can render as a native select", async () => {
    render(<NativeDropdown {...NativeDropdown.args} />);
    expect(screen.getByRole("listbox")).toBeInTheDocument();
});

it("can render with a custom trigger", async () => {
    render(<CustomTrigger {...CustomTrigger.args} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    expect(screen.getByRole("button").textContent).toBe("Batch");
});

it("can render with custom options templates", async () => {
    render(<ComponentOptions {...ComponentOptions.args} />);
    expect(screen.getByRole("button")).toBeInTheDocument();
    userEvent.click(screen.getByRole("button"));

    expect(screen.getByTestId("custom-opt1")).toBeInTheDocument();
    expect(screen.getByTestId("custom-opt2")).toBeInTheDocument();
    expect(screen.getByTestId("custom-opt3")).toBeInTheDocument();
    expect(screen.getByTestId("custom-opt4")).toBeInTheDocument();
});

it("can render as disabled", async () => {
    render(<Disabled {...Disabled.args} />);
    expect(screen.getByRole("button")).toBeDisabled();
});

it("can render native select as disabled", async () => {
    render(<Disabled {...Disabled.args} isNative />);
    expect(screen.getByRole("listbox")).toBeDisabled();
});

it("fires a provided onChange handler", () => {
    let onClick = jest.fn();
    render(<Basic {...Basic.args} onChange={onClick} />);

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.queryAllByRole("listitem")[0]);

    expect(onClick).toHaveBeenCalled();
});

it("fires a provided onChange handler with supplied option data as args", () => {
    let onClick = jest.fn();
    render(<Basic {...Basic.args} onChange={onClick} />);

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.queryAllByRole("listitem")[0]);

    expect(onClick).toHaveBeenCalledWith(
        Basic.args.options[0], // first arg is the original option arg
        expect.anything() // second arg receives original react event obj
    );
});

it("fires a provided onChange handler with supplied option data as args when using custom trigger", () => {
    let onClick = jest.fn();
    render(<CustomTrigger {...CustomTrigger.args} onChange={onClick} />);

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.queryAllByRole("listitem")[1]);

    expect(onClick).toHaveBeenCalledWith(
        CustomTrigger.args.options[1], // first arg is the original option arg
        expect.anything() // second arg receives original react event obj
    );
});

it("fires a provided onChange handler with supplied option data as args on Native Select", () => {
    let onClick = jest.fn();
    render(<NativeDropdown {...NativeDropdown.args} onChange={onClick} />);

    userEvent.selectOptions(screen.getByRole("listbox"), "1");

    expect(onClick).toHaveBeenCalledWith(
        NativeDropdown.args.options[0], // first arg is the original option arg
        expect.anything() // second arg receives original react event obj
    );
});

it("displays the proper text when a choice is made", () => {
    render(<Basic {...Basic.args} />);

    userEvent.click(screen.getByRole("button"));
    userEvent.click(screen.queryAllByRole("listitem")[0]);

    expect(screen.getByRole("button").textContent).toBe(
        Basic.args.options[0].text
    );
});

it("displays the proper text when a choice is made with Native Select", () => {
    render(<NativeDropdown {...NativeDropdown.args} />);

    userEvent.selectOptions(screen.getByRole("listbox"), "1");

    expect(
        screen.getByRole("option", {
            name: NativeDropdown.args.options[0].text,
        }).selected
    ).toBe(true);
});
