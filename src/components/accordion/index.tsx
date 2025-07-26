import { useState } from "react";

interface itemType {
  name?: string;
  title: string;
  overview: any;
}

interface Props {
  items: itemType[];
  label: string;
}

const Accordion = ({ label, items }: Props) => {
  const [openItems, setOpenItems] = useState<number[]>([]);

  const updateOpenItems = (e, index: number) => {
    console.log("updateOpenItems", index, openItems);
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
      role="menu"
      data-testid="accordion"
    >
      {items.map((item: any, index: number) => {
        const isOpen = openItems.includes(index);
        return (
          <div
            className={`govuk-accordion__section${isOpen ? " govuk-accordion__section--expanded" : ""}`}
            role="none"
            key={`accordion-${label}-${index}`}
            data-testid="accordion-item"
            aria-expanded={isOpen}
          >
            <div
              className="govuk-accordion__section-header"
              onClick={(e) => {
                updateOpenItems(e, index);
              }}
            >
              <h2 className="govuk-accordion__section-heading">
                <button
                  type="button"
                  aria-controls="accordion-default-content-1"
                  className="govuk-accordion__section-button"
                  aria-expanded="true"
                  aria-label="Writing well for the web , Hide this section"
                >
                  <span
                    className="govuk-accordion__section-heading-text"
                    id="accordion-default-heading-1"
                  >
                    <span className="govuk-accordion__section-heading-text-focus"> {item.title}</span>
                  </span>
                  <span className="govuk-visually-hidden govuk-accordion__section-heading-divider">, </span>
                  <span
                    className="govuk-accordion__section-toggle"
                    data-nosnippet=""
                  >
                    <span className="govuk-accordion__section-toggle-focus">
                      <span className="govuk-accordion-nav__chevron"></span>
                      <span className="govuk-accordion__section-toggle-text">Hide</span>
                    </span>
                  </span>
                </button>
              </h2>
            </div>
            <div
              id="accordion-default-content-1"
              className="govuk-accordion__section-content"
            >
              <p className="govuk-body">{item.overview}</p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
