// PopMenu.test.js

import React from "react";
import { render, screen, act } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Basic } from "./PopMenu.stories";
import { WithHeader, WithIcons } from "./PopMenuItem.stories";

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

it.only("can be closed on item click", async () => {
    render(<Basic {...Basic.args} />);

    act(() => {
        userEvent.click(screen.getByRole("button"));
    });

    expect(screen.getByRole("menu")).toBeInTheDocument();

    act(() => {
        userEvent.click(screen.getByText("Choice 1"));
    });

    expect(screen.queryByRole("menu")).not.toBeInTheDocument();
});

it("can render an item with isHeader properly", async () => {
    render(<WithHeader {...WithHeader.args} />);

    act(() => {
        userEvent.click(screen.getByRole("button"));
    });

    expect(screen.getByText(WithHeader.args.text)).toBeInTheDocument();
});

it("can render an item with icons properly", async () => {
    render(<WithIcons {...WithIcons.args} />);

    act(() => {
        userEvent.click(screen.getByRole("button"));
    });

    // Two choices with an icon each
    expect(screen.getAllByRole("img").length).toBe(2);
});
