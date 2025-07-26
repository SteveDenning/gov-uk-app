import { icons } from "../../utils/use-icon";

interface Props {
  title: string;
}

const Header = ({ title = "Ministry of Defence" }: Props) => {
  return (
    <header
      className="govuk-header"
      data-module="govuk-header"
    >
      <div className="govuk-header__container govuk-width-container">
        <div className="moduk-header__logo govuk-header__logo">
          <a
            href="/"
            className="govuk-header__link govuk-header__link--homepage"
            title="Home"
          >
            <span className="govuk-header__logotype">{icons.logo}</span>
          </a>
        </div>
        <div className="govuk-header__content">
          <a
            href="#"
            className="govuk-header__link moduk-header__service-name govuk-header__service-name"
          >
            {title}
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
