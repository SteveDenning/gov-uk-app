import { useCallback, useEffect, useState } from "react";
import { AxiosResponse } from "axios";
import { debounce } from "lodash";

// Context
import { useAuth } from "../../context/AuthContext";

// Components
import Button from "../button";
import TextInput from "../text-input";

// Service
import getUsers from "../../services/get-users";

// Styles
import "./async-select-users.scss";

// Types
import { UserType } from "../../models";
import { apiRoutes } from "./../../consts/api-routes";

interface Props {
  setValue?: (e: UserType) => void;
}

const AsyncSelect = ({ setValue }: Props) => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [users, setUsers] = useState<UserType[]>([]);
  const [user, setUser] = useState<UserType | null>(null);

  const { keycloak } = useAuth();

  const handleSetValue = (user: UserType) => {
    setUser(user);
    setSearchTerm(user.email);
    setUsers([]);
  };

  const handleSearch = (value: string) => {
    setSearchTerm(value);
    debouncedFetchUsers(value);
  };

  const debouncedFetchUsers = useCallback(
    debounce((value: string) => {
      if (value.length > 2) {
        getUsers(apiRoutes.getUsers(value), keycloak.token)
          .then((response: AxiosResponse<UserType[]>) => {
            setMessage(!response.data.length ? "No Results Found" : "");
            setUsers(response.data);
          })
          .catch((error) => {
            console.error(error);
          });
      } else {
        setUsers([]);
      }
    }, 500),
    [],
  );

  useEffect(() => {
    if (!searchTerm.length) {
      setMessage("");
    }
  }, [searchTerm]);

  return (
    <div
      className="async-select"
      data-testid="async-select"
    >
      <div className="async-select__inner">
        <TextInput
          testId="async-select-input"
          label="Search users input field"
          noLabel
          id="async-select"
          name="async-select"
          type="search"
          aria-describedby="hint"
          onChange={(e) => {
            handleSearch(e.currentTarget.value);
          }}
          value={searchTerm}
        />
        {!!message.length && (
          <p
            data-testid="govuk-warning-text"
            className="govuk-warning-text  govuk-!-margin-top-2 govuk-!-margin-bottom-0 govuk-!-padding-0"
          >
            {message}
          </p>
        )}
        <ul className={`async-select__list ${!searchTerm.length || !users?.length ? "async-select__list--hidden" : ""}`}>
          {users?.map &&
            users?.map((user, index) => {
              return (
                <li
                  key={user.email + index}
                  className="async-select__list-item"
                  onClick={(e) => {
                    e.preventDefault();
                    handleSetValue(user);
                  }}
                >
                  <a
                    href="#"
                    className="async-select__list-link"
                  >
                    {user.email}
                  </a>
                </li>
              );
            })}
        </ul>
      </div>

      <Button
        variant="secondary"
        onClick={() => {
          setValue(user);
        }}
        disabled={!user || !!message.length || searchTerm.length < 3}
      >
        Add user emails
      </Button>
    </div>
  );
};

export default AsyncSelect;
