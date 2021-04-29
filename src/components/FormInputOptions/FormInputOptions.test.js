// FormInputOptions.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { WithCheckbox } from "./FormInputOptions.stories";

it("renders in the primary state", () => {
    render(<WithCheckbox />);
    expect(screen.getByRole("checkbox")).toBeInTheDocument();
});
