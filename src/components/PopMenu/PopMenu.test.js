// PopMenu.test.js

import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Basic } from "./PopMenu.stories";

it("renders the popmenu when trigger item is clicked", () => {
    render(<Basic {...Basic.args} />);

    act(() => {
        userEvent.click(screen.getByRole("button"));
    });

    expect(screen.getByRole("menu")).toBeInTheDocument();
});
