import { useState } from "react";

interface itemType {
  title: string;
  overview: any;
}

interface Props {
  items: itemType[];
  label: string;
}

const Accordion = ({ label, items }: Props) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const allExpanded = openItems.length === items.length;

  const toggleOpenItems = () => {
    if (openItems.length === items.length) {
      setOpenItems([]);
    } else {
      setOpenItems(items.map((_, index) => index));
    }
  };

  const updateOpenItems = (e, index: number) => {
    console.log(openItems);
    e.preventDefault();
    if (openItems.includes(index)) {
      setOpenItems(openItems.filter((item) => item !== index));
    } else {
      setOpenItems([...openItems, index]);
    }
  };

  return (
    <div
      className="govuk-accordion"
      data-testid="govuk-accordion"
    >
      <div className="govuk-accordion__controls">
        <button
          type="button"
          className="govuk-accordion__show-all"
          aria-expanded={allExpanded}
          onClick={toggleOpenItems}
          data-testid="govuk-accordion-show-all"
        >
          <span className={`govuk-accordion-nav__chevron govuk-accordion-nav__chevron--${allExpanded ? "up" : "down"}`}></span>
          <span className="govuk-accordion__show-all-text">{allExpanded ? "Hide" : "Show"} all sections</span>
        </button>
      </div>
      {items.map((item: any, index: number) => {
        const isOpen = openItems.includes(index);
        return (
          <div
            className={`govuk-accordion__section${isOpen ? " govuk-accordion__section--expanded" : ""}`}
            role="none"
            key={`accordion-${label}-${index}`}
            data-testid="govuk-accordion-section"
            aria-expanded={isOpen}
          >
            <div className="govuk-accordion__section-header">
              <h2 className="govuk-accordion__section-heading">
                <button
                  type="button"
                  aria-controls={`accordion-default-content-${index}`}
                  className="govuk-accordion__section-button"
                  aria-expanded={isOpen}
                  data-testid="govuk-accordion-section-button"
                  onClick={(e) => {
                    updateOpenItems(e, index);
                  }}
                >
                  <span
                    className="govuk-accordion__section-heading-text"
                    id={`accordion-default-heading-${index}`}
                  >
                    <span className="govuk-accordion__section-heading-text-focus"> {item.title}</span>
                  </span>
                  <span className="govuk-visually-hidden govuk-accordion__section-heading-divider">, </span>
                  <span className="govuk-accordion__section-toggle">
                    <span className="govuk-accordion__section-toggle-focus">
                      <span
                        className={`govuk-accordion-nav__chevron govuk-accordion-nav__chevron--${isOpen ? "up" : "down"}`}
                        data-testid="govuk-accordion-icon"
                      ></span>
                      <span className="govuk-accordion__section-toggle-text">{isOpen ? "Hide" : "Show"}</span>
                    </span>
                  </span>
                </button>
              </h2>
            </div>
            <div
              id={`accordion-default-content-${index}`}
              className="govuk-accordion__section-content"
            >
              <p
                className="govuk-body"
                data-testid="govuk-accordion-title"
              >
                {item.overview}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
