// PopMenu.test.js

import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Basic } from "./PopMenu.stories";

it("renders the popmenu when trigger item is clicked", async () => {
    render(<Basic {...Basic.args} />);

    act(() => {
        userEvent.click(screen.getByRole("button"));
    });

    expect(screen.getByRole("menu")).toBeInTheDocument();
});

it("can be controlled with keyboard", async () => {
    render(<Basic {...Basic.args} />);

    userEvent.tab();

    expect(screen.getByRole("button")).toHaveFocus();

    userEvent.type(screen.getByRole("button"), "{enter}");

    expect(screen.getByRole("menu")).toBeInTheDocument();

    userEvent.type(screen.getByRole("button"), "{esc}");

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});
