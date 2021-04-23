// Modal.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { BasicConfirm, CustomButtonText } from "./Modal.stories";

it("renders the BasicConfirm modal in the isOpen state", () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveTextContent("Confirm");
});

it("can dismiss the modal by hitting esc", async () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    userEvent.type(screen.getByRole("dialog"), "{esc}");

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

it("renders a default footer modal with custom button text", async () => {
    render(<CustomButtonText {...CustomButtonText.args} isOpen={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
        screen.getByRole("button", {
            name: CustomButtonText.args.cancelText,
        })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("button", {
            name: CustomButtonText.args.confirmText,
        })
    ).toBeInTheDocument();
});

it.skip("fires a provided onClick handler", () => {
    let onClick = jest.fn();
    render(<Primary {...Primary.args} onClick={onClick} />);

    userEvent.click(screen.getByRole(""));
    expect(onClick).toHaveBeenCalled();
});
