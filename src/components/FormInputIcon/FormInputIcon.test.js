// FormInputIcon.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Basic } from "./FormInputIcon.stories";

it("renders the input icon", () => {
    render(<Basic {...Basic.args} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
});
