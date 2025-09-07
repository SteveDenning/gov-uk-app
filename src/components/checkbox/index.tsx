interface Props {
  checked: boolean;
  disabled?: boolean;
  id: string;
  label: any;
  name: string;
  noLabel?: boolean;
  onChange: (e: any) => void;
  required?: boolean;
  testId?: string;
}

const Checkbox: React.FC<Props> = ({ checked, disabled, id, label, name, noLabel, onChange, required, testId = "govuk-checkboxes-input" }) => {
  return (
    <div className="govuk-checkboxes__item">
      <input
        className="govuk-checkboxes__input"
        id={id}
        name={name}
        type="checkbox"
        disabled={disabled}
        aria-disabled={disabled}
        required={required}
        aria-required={required}
        checked={checked}
        aria-checked={checked}
        onChange={onChange}
        aria-label={noLabel ? label : undefined}
        data-testid={testId}
      />
      <label
        className="govuk-label govuk-checkboxes__label"
        htmlFor={id}
        data-testid="govuk-checkboxes-label"
      >
        <span className={noLabel ? "govuk-visually-hidden" : undefined}>
          {label}
          {required && (
            <span>
              *<span className="govuk-visually-hidden"> Required</span>
            </span>
          )}
        </span>
      </label>
    </div>
  );
};

export default Checkbox;
