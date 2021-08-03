// Modal.test.js

import React from "react";
import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import {
    BasicConfirm,
    ScrollingContent,
    OverlayDismissable,
    CustomButtonText,
    CustomBackButton,
    FocusHandling,
} from "./Modal.stories";

it("can render with a custom backButton", () => {
    render(<CustomBackButton {...CustomBackButton.args} isOpen={true} />);
    expect(screen.getByText("Nope")).toBeInTheDocument();
});

it("can render in the open state", () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByRole("dialog")).toHaveTextContent("Confirm");
});

it("will be unmounted in the closed state", () => {
    render(<BasicConfirm {...BasicConfirm.args} isOpen={false} />);

    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
});

it("can be dismissed by hitting esc", async () => {
    render(<ScrollingContent {...ScrollingContent.args} isOpen={true} />);
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    userEvent.type(screen.getByRole("dialog"), "{esc}");

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

it("can not be dismissed by hitting esc when configured as such", async () => {
    render(
        <ScrollingContent
            {...ScrollingContent.args}
            isOpen={true}
            isEscDisabled={true}
        />
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();

    userEvent.type(screen.getByRole("dialog"), "{esc}");

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).toBeInTheDocument();
    });
});

it("can be dismissed by hitting the x", async () => {
    render(<ScrollingContent {...ScrollingContent.args} isOpen={true} />);

    userEvent.click(screen.getByTestId("modal-close"));

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

it("can be dismissed by clicking the overlay (if dismissable)", async () => {
    render(
        <OverlayDismissable
            {...OverlayDismissable.args}
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
    render(<ScrollingContent {...ScrollingContent.args} isOpen={true} />);

    userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    await waitFor(() => {
        expect(screen.queryByRole("dialog")).not.toBeInTheDocument();
    });
});

it("renders with a default footer in a loading/submission state", () => {
    render(
        <BasicConfirm {...BasicConfirm.args} isOpen={true} isLoading={true} />
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
});

it("renders with default footer and default button text", async () => {
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

it("renders with default buttons and custom button text", async () => {
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

it("renders with default buttons in a loading state", async () => {
    render(
        <BasicConfirm
            {...BasicConfirm.args}
            isOpen={true}
            isLoading={true}
            loadingText={"Loading..."}
        />
    );
    expect(screen.getByRole("dialog")).toBeInTheDocument();
    expect(
        screen.getByRole("button", {
            name: "Loading...",
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
        <ScrollingContent
            {...ScrollingContent.args}
            onClose={onClose}
            isOpen={true}
        />
    );

    userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    // Wait for animation to finish
    await waitFor(() => expect(onClose).toHaveBeenCalled());
});

it("will fire the onCancel handler when the default Cancel button is clicked", async () => {
    let onCancel = jest.fn();
    render(
        <BasicConfirm
            {...BasicConfirm.args}
            onCancel={onCancel}
            isOpen={true}
        />
    );

    userEvent.click(screen.getByRole("button", { name: "Cancel" }));

    // Wait for animation to finish
    await waitFor(() => expect(onCancel).toHaveBeenCalled());
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

it("will trap focus on elements when opened", async () => {
    render(<FocusHandling {...FocusHandling.args} />);
    expect(screen.queryByRole("dialog")).not.toBeInTheDocument();

    userEvent.click(screen.getByRole("button", { name: "Open Modal" }));

    expect(screen.queryByRole("dialog")).toBeInTheDocument();

    expect(screen.getByRole("textbox", { name: "Modal Input" })).toHaveFocus();

    userEvent.tab();

    expect(screen.getByRole("button", { name: "Cancel" })).toHaveFocus();

    userEvent.tab();

    expect(screen.getByRole("button", { name: "Confirm" })).toHaveFocus();

    // After confirm, tabbing should wrap back to the close button as first available element

    userEvent.tab();

    expect(screen.getByTestId("modal-close")).toHaveFocus();
});
