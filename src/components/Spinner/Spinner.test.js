// Spinner.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Default } from "./Spinner.stories";

it("renders the spinner in the default color", () => {
    render(<Default {...Default.args} />);
    expect(screen.getByTestId("spinner")).toBeInTheDocument();
});
