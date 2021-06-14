// Switcher.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Primary } from "./Switcher.stories";

it("can switch between views and unmount them after switching", async () => {
    render(<Primary {...Primary.args} />);
    expect(screen.queryByTestId("view-1")).toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "2" }));

    await waitFor(() => {
        expect(screen.getByTestId("view-2")).toBeInTheDocument();
        expect(screen.queryByTestId("view-1")).not.toBeInTheDocument();
    });
});
