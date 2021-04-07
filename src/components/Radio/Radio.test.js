// Radio.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Basic, DefaultChecked } from "./Radio.stories";

it("renders the radio in the primary state", () => {
    render(<Basic {...Basic.args} text="Nifty" />);
    expect(screen.getByText("Nifty")).toBeInTheDocument();
});

it("renders the radio with default checked state", () => {
    render(
        <DefaultChecked {...DefaultChecked.args} text="Nifty" defaultChecked />
    );
    expect(screen.getByRole("radio")).toBeChecked();
});

// it("fires a provided onClick handler", () => {
//     let onClick = jest.fn();
//     render(<Primary {...Primary.args} onClick={onClick} />);

//     userEvent.click(screen.getByRole(""));
//     expect(onClick).toHaveBeenCalled();
// });
