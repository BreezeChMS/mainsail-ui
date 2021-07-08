// ProgressBar.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Basic } from "./ProgressBar.stories";

it("renders the progressbar in the primary state", () => {
    render(<Basic {...Basic.args} />);
    expect(screen.getByRole("progressbar")).toBeInTheDocument();
});
