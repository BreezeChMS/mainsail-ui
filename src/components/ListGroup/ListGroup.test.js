// ListGroup.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { ListItem, ActiveItem } from "./ListGroupItem.stories";
import { Detailed } from "./ListGroup.stories";

it("renders as a detailed listgroup", () => {
    render(<Detailed {...Detailed.args} />);
    expect(screen.getByRole("list")).toBeInTheDocument();
});

it("renders the listgroup item", () => {
    render(<ListItem {...ListItem.args} />);
    expect(screen.getByRole("listitem")).toBeInTheDocument();
});

it("unmounts the listgroup item if marked as not visible", () => {
    render(<ListItem {...ListItem.args} isVisible={false} />);
    expect(screen.queryByRole("listitem")).not.toBeInTheDocument();
});

it("renders the listgroup item in an active state", () => {
    render(<ActiveItem {...ActiveItem.args} />);
    expect(screen.getByRole("listitem")).toHaveClass("active");
});

it("fires a provided onClick handler", () => {
    let onClick = jest.fn();
    render(<ListItem {...ListItem.args} onClick={onClick} />);

    userEvent.click(screen.getByText(ListItem.args.text));
    expect(onClick).toHaveBeenCalled();
});
