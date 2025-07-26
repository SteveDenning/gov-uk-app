import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./../index";

describe("Header component", () => {
  it("Should render the header with the correct title", () => {
    render(<Header title="MOD" />);
    expect(screen.getByTestId("govuk-header")).toBeInTheDocument();
  });

  it("Should render the default title", () => {
    render(<Header />);
    expect(screen.getByTestId("govuk-header-content-header")).toBeInTheDocument();
  });

  it("has correct homepage link and logo", () => {
    render(<Header title="Ministry of Defence" />);
    const logoLink = screen.getByTitle("Home");
    expect(logoLink).toHaveAttribute("href", "/");
  });
});
