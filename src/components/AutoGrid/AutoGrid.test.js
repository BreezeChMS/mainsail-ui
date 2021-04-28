// AutoGrid.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { SimpleGrid } from "./AutoGrid.stories";

it("renders the AutoGrid", () => {
    render(<SimpleGrid {...SimpleGrid.args} data-testid="grid" />);
    expect(screen.getByTestId("grid")).toBeInTheDocument();
});
