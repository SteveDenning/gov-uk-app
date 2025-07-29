import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Header from "./../index";

describe("Header component", () => {
  beforeEach(() => {
    render(<Header title="MOD" />);
  });
  it("Should render the header with the correct title", () => {
    expect(screen.getByTestId("govuk-header")).toBeInTheDocument();
  });

  it("Should render the default title", () => {
    expect(screen.getByTestId("govuk-header-content-header")).toBeInTheDocument();
  });
});
