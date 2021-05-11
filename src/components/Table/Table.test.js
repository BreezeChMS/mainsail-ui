// Table.test.js

import React from "react";
import { render, screen, waitFor, within } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";

import {
    Bordered,
    Open,
    Loading,
    HeaderConfig,
    Sortable,
} from "./Table.stories";
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

it.skip("should fire the onSort callback during any sorting event", async () => {
    const onSort = jest.fn();
    let modifiedArgs = {
        ...Sortable.args,
        onSort,
    };
    render(<Sortable {...modifiedArgs} />);
    expect(screen.getByRole("table")).toBeInTheDocument();

    let firstRow = screen.queryAllByRole("row")[0];

    expect(within(firstRow).queryAllByRole("cell")[1].textContent).toBe(
        "Halpert"
    );

    // Should sort asc
    userEvent.click(screen.getByRole("columnheader", { name: "last name" }));

    await waitFor(() => {
        expect(onSort).toHaveBeenCalled();
    });
});
