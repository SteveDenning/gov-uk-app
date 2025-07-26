// Icons
import { icons } from "../../utils/use-icon";

// Styles
import "./header.scss";

interface Props {
  title?: string;
}

const Header = ({ title = "Ministry of Defence" }: Props) => {
  return (
    <header
      className="govuk-header"
      data-module="govuk-header"
      data-testid="govuk-header"
    >
      <div className="govuk-header__container govuk-width-container">
        <div className="moduk-header__logo govuk-header__logo">
          <a
            href="/"
            className="govuk-header__link govuk-header__link--homepage"
            title="Home"
          >
            <span
              className="govuk-header__logotype"
              data-testid="govuk-header__logotype"
            >
              {icons.logo}
            </span>
          </a>
        </div>
        <div className="govuk-header__content">
          <h1 className="govuk-header__content-header">
            <a
              data-testid="govuk-header-content-header"
              href="#"
              className="govuk-header__link moduk-header__service-name govuk-header__service-name"
            >
              {title}
            </a>
          </h1>
        </div>
      </div>
    </header>
  );
};

export default Header;
