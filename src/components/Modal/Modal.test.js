// Modal.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { BasicConfirm, CustomButtonText, FocusHandling } from "./Modal.stories";

it("can render a basic confirm modal in the open state", () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveTextContent("Confirm");
});

it("will be unmounted in the closed state", () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={false} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("can be dismissed by hitting esc", async () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    userEvent.type(screen.getByRole("dialog"), "{esc}");

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

it("can be dismissed by hitting the x", async () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={true} />);

    userEvent.click(screen.getByTestId("modal-close"));

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

it("can be dismissed by clicking the overlay (if dismissable)", async () => {
    render(
        <BasicConfirm
            {...BasicConfirm.args}
            isOpen={true}
            isDismissable={true}
        />
    );

    userEvent.click(screen.getByTestId("modal-overlay"));

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

it("can be dismissed by hitting the default cancel", async () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={true} />);

    userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

it("renders the modal with default footer and default button text", async () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
        screen.getByRole("button", {
            name: "Cancel",
        })
    ).toBeInTheDocument();
    expect(
        screen.getByRole("button", {
            name: "Confirm",
        })
    ).toBeInTheDocument();
});

it("renders the default confirm modal with default buttons and custom button text", async () => {
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

it("will fire the onClickBack handler when the back button is visible", async () => {
    let onClick = jest.fn();
    render(
        <BasicConfirm
            {...BasicConfirm.args}
            onClickBack={onClick}
            title="Confirm w/ Back"
            isOpen={true}
        />
    );

    userEvent.click(screen.getByRole("button", { name: "Back" }));
    expect(onClick).toHaveBeenCalled();
});

it("will fire the onClose handler when the modal is closed and animation is done", async () => {
    let onClose = jest.fn();
    render(
        <BasicConfirm {...BasicConfirm.args} onClose={onClose} isOpen={true} />
    );

    userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    // Wait for animation to finish
    await waitFor(() => expect(onClose).toHaveBeenCalled());
});

it("will fire the onConfirm handler when the default modal confirm button is pressed", async () => {
    let onConfirm = jest.fn();
    render(
        <BasicConfirm
            {...BasicConfirm.args}
            onConfirm={onConfirm}
            isOpen={true}
        />
    );

    userEvent.click(screen.getByRole("button", { name: "Confirm" }));

    // Wait for animation to finish
    await waitFor(() => expect(onConfirm).toHaveBeenCalled());
});

it("will handle focus on elements when opened and closed", async () => {
    render(<FocusHandling {...FocusHandling.args} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "Open Modal" }));

    expect(screen.queryByRole("dialog")).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: "Modal Input" })).toHaveFocus();

    userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    await waitFor(() => {
        expect(
            screen.getByRole("textbox", { name: "Page Input" })
        ).toHaveFocus();
    });
});
