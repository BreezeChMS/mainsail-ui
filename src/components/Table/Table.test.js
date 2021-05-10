// Table.test.js

import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import { Bordered, Open } from "./Table.stories";
import { Column } from "components/Table/Column";

it("renders the column as a cell", () => {
    render(<Column />);
    expect(screen.getByRole("cell")).toBeInTheDocument();
});

it("renders a bordered table", () => {
    render(<Bordered {...Bordered.args} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByRole("table").classList.contains("bordered")).toBe(true);
});

it("renders the correct number of columns without a column config", () => {
    render(<Bordered {...Bordered.args} />);
    let firstRow = screen.queryAllByRole("row")[0];
    expect(within(firstRow).queryAllByRole("cell").length).toBe(4);
});

it("renders an open style table", () => {
    render(<Open {...Open.args} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByRole("table").classList.contains("open")).toBe(true);
});

it.skip("fires a provided onClick handler", () => {
    let onClick = jest.fn();
    render(<Bordered {...Bordered.args} onClick={onClick} />);

    userEvent.click(screen.getByRole(""));
    expect(onClick).toHaveBeenCalled();
});
