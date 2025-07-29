import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import Footer from "./../index";

describe("Header component", () => {
  beforeEach(() => {
    render(<Footer />);
  });

  it("Should render the footer", () => {
    expect(screen.getByTestId("govuk-footer")).toBeInTheDocument();
  });
});
