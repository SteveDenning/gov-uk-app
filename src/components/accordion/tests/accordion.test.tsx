import "@testing-library/jest-dom";
import { describe, it, expect } from "vitest";
import { screen, render, fireEvent, waitFor } from "@testing-library/react";

// Components
import Accordion from "../index";

describe("Accordion Component", () => {
  describe("Rendering accordion elements", () => {
    beforeEach(() => {
      render(
        <Accordion
          label="Lorem ipsum"
          items={[
            {
              title: "Lorem ipsum",
              overview: "This is some toggle content",
            },
            {
              title: "Lorem ipsum",
              overview: "This is some toggle content",
            },
            {
              title: "Lorem ipsum",
              overview: "This is some toggle content",
            },
          ]}
        />,
      );
    });

    it("Should render the accordion", () => {
      expect(screen.getByTestId("govuk-accordion")).toBeInTheDocument();
      expect(screen.queryAllByTestId("govuk-accordion-title")).toHaveLength(3);
    });

    it("Should render all accordion elements", () => {
      expect(screen.queryAllByTestId("govuk-accordion-section-button")[0]).toBeInTheDocument();
      expect(screen.queryAllByTestId("govuk-accordion-section")[0]).toBeInTheDocument();
      expect(screen.queryAllByTestId("govuk-accordion-icon")[0]).toBeInTheDocument();
      expect(screen.queryAllByTestId("govuk-accordion-title")[0]).toBeInTheDocument();
    });

    it("Should render all items closed by default", () => {
      expect(screen.queryAllByTestId("govuk-accordion-section-button")[0]).not.toHaveClass("govuk-accordion__section--expanded");
    });

    it("Should open item when clicking toggle", async () => {
      fireEvent.click(screen.queryAllByTestId("govuk-accordion-section-button")[0]);
      await waitFor(() => expect(screen.queryAllByTestId("govuk-accordion-section")[0]).toHaveClass("govuk-accordion__section--expanded"));
    });

    it("Should expand all items when clicking 'Show all sections'", async () => {
      fireEvent.click(screen.getByTestId("govuk-accordion-show-all"));
      const expandedSections = screen.getAllByTestId("govuk-accordion-section");
      expandedSections.forEach((section) => {
        expect(section).toHaveClass("govuk-accordion__section--expanded");
      });
    });
  });
});
