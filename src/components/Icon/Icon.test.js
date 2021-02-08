// Icon.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { Icon } from "./Icon.stories";

it("renders the an Icon in the default color", () => {
    render(<Icon {...Icon.args} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
});

it("renders the an Icon in the light color", () => {
    render(<Icon {...Icon.args} color="light" />);
    expect(screen.getByRole("img")).toHaveClass("light");
});

it("renders the an Icon in the dark color", () => {
    render(<Icon {...Icon.args} color="dark" />);
    expect(screen.getByRole("img")).toHaveClass("dark");
});
