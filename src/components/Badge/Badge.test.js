// Badge.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Basic, Removable } from "./Badge.stories";

it("renders the badge in the primary state", () => {
    render(<Basic {...Basic.args} />);
    expect(screen.getByText("Badge")).toBeInTheDocument();
});

it("fires a provided onRemove handler", () => {
    let onClick = jest.fn();
    render(<Removable {...Removable.args} onClick={onClick} />);

    userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
});
