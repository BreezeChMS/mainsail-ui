// Avatar.test.js

import React from "react";
import { render, screen } from "@testing-library/react";

import "@testing-library/jest-dom/extend-expect";

import { MediumAvatar, SmallAvatar } from "./Avatar.stories";

it("renders the avatar in the medium size", () => {
    render(<MediumAvatar {...MediumAvatar.args} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img").classList.contains("md")).toBeTruthy();
});

it("renders the avatar in the small size", () => {
    render(<SmallAvatar {...SmallAvatar.args} />);
    expect(screen.getByRole("img")).toBeInTheDocument();
    expect(screen.getByRole("img").classList.contains("sm")).toBeTruthy();
});
