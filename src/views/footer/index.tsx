// Icons
import { icons } from "../../utils/use-icon";

const Footer = () => {
  return (
    <footer
      className="govuk-footer"
      data-testid="govuk-footer"
    >
      <div className="govuk-width-container">
        <div className="govuk-footer__meta">
          <div className="govuk-footer__meta-item govuk-footer__meta-item--grow">
            <span className="govuk-footer__meta-item govuk-footer__meta-item--grow">{icons.OGL}</span>
            <span className="govuk-footer__licence-description">
              All content is available under the
              <a
                className="govuk-footer__link"
                href="https://www.nationalarchives.gov.uk/doc/open-government-licence/version/3/"
                rel="license"
              >
                Open Government License v3.0
              </a>
              , except where otherwise stated
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
