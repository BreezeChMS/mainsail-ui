// DatePicker.test.js

import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Basic } from "./NativeDatePicker.stories";

it("renders the datepicker in the initial state", () => {
    render(<Basic {...Basic.args} />);
    expect(screen.getByTestId("native-datepicker")).toBeInTheDocument();
});

it("fires a provided onChange handler", () => {
    let onChange = jest.fn();
    render(<Basic {...Basic.args} onChange={onChange} />);

    let dateInput = screen.getByTestId("native-datepicker");

    fireEvent.change(dateInput, { target: { value: "2012-05-21" } });

    expect(onChange).toHaveBeenCalledWith("2012-05-21");
});
