// FormHelpText.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Primary, WithChildren } from "./FormHelpText.stories";

it("renders in the primary state", () => {
    render(<Primary {...Primary.args} />);
    expect(screen.getByText(Primary.args.text)).toBeInTheDocument();
});

it("renders with children", () => {
    render(<WithChildren {...WithChildren.args} />);
    expect(screen.getByText("Some text with a")).toBeInTheDocument();
});
