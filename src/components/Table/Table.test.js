// Table.test.js

import React from "react";
import { render, screen, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import {
    Bordered,
    Open,
    Loading,
    HeaderConfig,
    Sortable,
    Selectable,
} from "./Table.stories";
import {
    Basic as BasicColumn,
    AlternateNaming,
} from "components/Table/Column.stories";

it("renders the column as a cell", () => {
    render(<BasicColumn />);
    expect(screen.queryAllByRole("cell").length).toBe(4);
});

it("renders the column header text according to the column field prop", () => {
    render(<BasicColumn {...BasicColumn.args} />);
    expect(screen.queryAllByRole("columnheader")[1].textContent).toBe(
        BasicColumn.args.field
    );
});

it("overrides the column header text according to the column label prop", () => {
    render(<AlternateNaming {...AlternateNaming.args} />);
    expect(screen.queryAllByRole("columnheader")[1].textContent).toBe(
        AlternateNaming.args.label
    );
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

it("renders a table properly in the isLoading state", () => {
    render(<Loading {...Loading.args} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
});

it("renders a table with a custom headerConfig", () => {
    render(<HeaderConfig {...HeaderConfig.args} />);
    expect(screen.getByRole("table")).toBeInTheDocument();
    expect(screen.queryAllByRole("columnheader").length).toBe(2);
});

it("renders a table with sortable columns", async () => {
    render(<Sortable {...Sortable.args} />);
    expect(screen.getByRole("table")).toBeInTheDocument();

    let firstRow = screen.queryAllByRole("row")[0];

    expect(within(firstRow).queryAllByRole("cell")[1].textContent).toBe(
        "Halpert"
    );

    // Should sort asc
    userEvent.click(screen.getByRole("columnheader", { name: "last name" }));

    firstRow = screen.queryAllByRole("row")[0];

    expect(within(firstRow).queryAllByRole("cell")[1].textContent).toBe(
        "Beasley"
    );

    // Should sort desc
    userEvent.click(screen.getByRole("columnheader", { name: "last name" }));

    firstRow = screen.queryAllByRole("row")[0];

    expect(within(firstRow).queryAllByRole("cell")[1].textContent).toBe(
        "Schrute"
    );
});

it("should fire the onSort callback during any sorting event", async () => {
    const onSort = jest.fn();

    render(<Sortable onSort={onSort} />);
    expect(screen.getByRole("table")).toBeInTheDocument();

    let firstRow = screen.queryAllByRole("row")[0];

    expect(within(firstRow).queryAllByRole("cell")[1].textContent).toBe(
        "Halpert"
    );

    // Should sort asc
    userEvent.click(screen.getByRole("columnheader", { name: "last name" }));

    expect(onSort).toHaveBeenCalled();
    expect(onSort).toHaveBeenCalledWith({ last_name: "asc" });
});

it("supports row selection and onSelect callback", () => {
    const onSelect = jest.fn();
    let modifiedArgs = {
        ...Selectable.args,
        onSelect,
    };

    render(<Selectable {...modifiedArgs} />);
    expect(screen.getByRole("table")).toBeInTheDocument();

    userEvent.click(screen.queryAllByRole("checkbox")[1]);

    expect(onSelect).toHaveBeenCalled();
    expect(onSelect).toHaveBeenCalledWith(
        Selectable.args.rowData[1], // row data selected
        true, // checked state
        expect.anything() // browser event as 3rd arg
    );
});
