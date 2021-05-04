// Flex.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Basic } from "./Flex.stories";

it("renders the flex layout", () => {
    render(<Basic {...Basic.args} />);
    expect(screen.queryByTestId("flex-row")).toBeInTheDocument();
    expect(screen.queryAllByTestId("flex-col").length).toBe(6);
});
