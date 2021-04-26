// Transition.test.js

import React from "react";
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

import { FadeAndScale } from "./Transition.stories";

it("renders the component if isActive", () => {
    render(<FadeAndScale {...FadeAndScale.args} isActive />);
    expect(screen.getByTestId("animated-block")).toBeInTheDocument();
});

it("is unmounted when not active", () => {
    render(<FadeAndScale {...FadeAndScale.args} isActive={false} />);
    expect(screen.queryByTestId("animated-block")).not.toBeInTheDocument();
});
