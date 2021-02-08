// Spinner.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Default, Light, Dark } from "./Spinner.stories";

it("renders the spinner in the default color", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
});

it("renders the spinner in the light color", () => {
    render(<Light {...Light.args} />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.getByTestId("spinner")).toHaveClass("light");
});

it("renders the spinner in the dark color", () => {
    render(<Dark {...Dark.args} />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
    expect(screen.getByTestId("spinner")).toHaveClass("dark");
});
