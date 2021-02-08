// Button.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import {
    Primary,
    Secondary,
    Tertiary,
    IconLeft,
    IconRight,
    IconOnly,
    Intent,
    Link,
    WithChildren,
    Loading,
    Disabled,
    LoadingWithText,
} from "./Button.stories";
import { ENUMS } from "../Icon";

it("renders the button in the primary variant by default", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByRole("button")).toHaveTextContent("Click me");
});

it("renders the button in the secondary variant", () => {
    render(<Secondary {...Secondary.args} />);
    expect(screen.getByRole("button")).toHaveClass("secondary");
});

it("renders the button in the tertiary variant", () => {
    render(<Tertiary {...Tertiary.args} />);
    expect(screen.getByRole("button")).toHaveClass("tertiary");
});

it("renders the button in the link variant", () => {
    render(<Link {...Link.args} />);
    expect(screen.getByRole("button")).toHaveClass("link");
});

it("renders the button with intent props", () => {
    render(<Intent {...Intent.args} />);
    expect(screen.getByRole("button")).toHaveClass("danger");
});

it("renders the button with a left icon", () => {
    render(<IconLeft {...IconLeft.args} text="Click me" />);
    expect(screen.getByRole("button").childNodes[0]).toHaveClass(
        "mainsail-icon"
    );
    expect(screen.getByRole("button").childNodes[1]).toHaveTextContent(
        "Click me"
    );
});

it("renders the button with a right icon", () => {
    render(<IconRight {...IconRight.args} text="Click me" />);
    expect(screen.getByRole("button").childNodes[1]).toHaveClass(
        "mainsail-icon"
    );
    expect(screen.getByRole("button").childNodes[0]).toHaveTextContent(
        "Click me"
    );
});

it("renders the button with only an icon", () => {
    render(<IconOnly {...IconOnly.args} />);

    expect(screen.getByRole("button").childNodes[0]).toHaveClass(
        "mainsail-icon"
    );
    expect(screen.getByRole("button").childNodes[1]).toEqual(undefined);
});

it("renders the loading spinner if in loading state", () => {
    render(<Loading {...Loading.args} />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
});

it("renders the loading text if in loading state", () => {
    render(<Loading {...LoadingWithText.args} />);
    expect(screen.getByRole("button")).toHaveTextContent("Waiting");
});

it("renders the button in a disabled state", () => {
    render(<Disabled {...Disabled.args} />);
    expect(screen.getByRole("button")).toHaveTextContent("Disabled");
    expect(screen.getByRole("button")).toBeDisabled();
});

it("renders the button with children", () => {
    render(
        <WithChildren {...Primary.args}>
            <span>Test</span>
        </WithChildren>
    );
    expect(screen.getByRole("button")).toHaveTextContent("Test");
});

it("fires a provided onClick handler", () => {
    let onClick = jest.fn();
    render(<Primary {...Primary.args} onClick={onClick} />);

    userEvent.click(screen.getByRole("button"));
    expect(onClick).toHaveBeenCalled();
});

it("is tabbable", () => {
    render(<Primary {...Primary.args} />);

    userEvent.tab(screen.getByRole("button"));
    expect(screen.getByRole("button")).toHaveFocus();
});
