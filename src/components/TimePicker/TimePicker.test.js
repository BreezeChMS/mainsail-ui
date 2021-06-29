// TimePicker.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import {
    Basic,
    Disabled,
    NativeDropdowns,
    NoPeriod,
} from "./TimePicker.stories";

it("renders the timepicker in the primary state", () => {
    render(<Basic {...Basic.args} />);
    expect(screen.queryAllByRole("button").length).toBe(2);
});

it("fires a provided onClick handler when selecting a time", () => {
    let onChange = jest.fn();
    render(<Basic {...Basic.args} onChange={onChange} />);

    userEvent.click(screen.getByText("00:00"));

    expect(screen.getByRole("listbox")).toBeInTheDocument();

    userEvent.click(screen.getByText("12:30"));

    expect(onChange).toBeCalledWith({ time: "12:30", period: "PM" });
});

it("fires a provided onClick handler when selecting a time and a period", () => {
    let onChange = jest.fn();
    render(<Basic {...Basic.args} onChange={onChange} />);

    userEvent.click(screen.getByText("00:00"));

    expect(screen.getByRole("listbox")).toBeInTheDocument();

    userEvent.click(screen.getByText("12:30"));

    expect(onChange).toBeCalledWith({ time: "12:30", period: "PM" });

    userEvent.click(screen.getByText("PM"));

    expect(screen.getByRole("listbox")).toBeInTheDocument();

    userEvent.click(screen.getByText("AM"));

    expect(onChange).toBeCalledWith({ time: "12:30", period: "AM" });
});

it("can render as disabled", async () => {
    render(<Disabled {...Disabled.args} />);
    expect(screen.getAllByRole("button")[0]).toBeDisabled();
    expect(screen.getAllByRole("button")[1]).toBeDisabled();
});

it("can render without a period picker", async () => {
    render(<NoPeriod {...NoPeriod.args} />);

    expect(screen.queryByText("AM")).not.toBeInTheDocument();
    expect(screen.queryByText("PM")).not.toBeInTheDocument();
});

it("can render both as a native select", async () => {
    render(<NativeDropdowns {...NativeDropdowns.args} />);
    expect(screen.queryAllByRole("listbox")[0]).toBeInTheDocument();
    expect(screen.queryAllByRole("listbox")[1]).toBeInTheDocument();
});

it("can be opened and closed with keyboard", async () => {
    let onChange = jest.fn();
    render(<Basic {...Basic.args} onChange={onChange} />);

    userEvent.tab();

    let timeDropdown = screen.getByText("00:00");

    expect(timeDropdown).toHaveFocus();

    userEvent.type(timeDropdown, { text: "{enter}" });

    expect(screen.getByRole("listbox")).toBeInTheDocument();

    userEvent.type(timeDropdown, "{esc}");

    expect(screen.queryByRole("listbox")).not.toBeInTheDocument();
});

it("can be navigated with keyboard", async () => {
    let onChange = jest.fn();
    let newTimeOptions = ["1:00", "2:00", "3:00"];
    render(
        <Basic
            {...Basic.args}
            onChange={onChange}
            timeOptions={newTimeOptions}
        />
    );

    userEvent.tab();

    let timeDropdown = screen.getByText("00:00");

    expect(timeDropdown).toHaveFocus();
    userEvent.type(timeDropdown, { text: "{enter}" });

    userEvent.tab(); // Selects first
    userEvent.tab();
    userEvent.tab();
    userEvent.tab(); // Should cycle back to first

    expect(screen.getByText("1:00")).toHaveFocus();

    userEvent.type(screen.getByText("1:00"), { text: "{enter}" });

    expect(onChange).toBeCalledWith({ time: "1:00", period: "PM" });
});
