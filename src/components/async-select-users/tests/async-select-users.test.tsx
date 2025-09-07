import { vi } from "vitest";
import { render, screen } from "@testing-library/react";
import { fireEvent, waitFor } from "@testing-library/react";

// Context
import { AuthProvider } from "../../../context/AuthContext";

// Component
import AsyncSelect from "../index";

// Service
import getUsers from "../../../services/get-users";

vi.mock("../../../context/AuthContext", () => ({
  AuthProvider: ({ children }: { children: React.ReactNode }) => <>{children}</>,
  useAuth: () => ({ logout: vi.fn(), keycloak: { token: "dummy-token" } }),
}));

vi.mock("../../../services/get-users", () => ({
  default: vi.fn(),
}));

const mockUsers = [
  { email: "steve@example.com", username: "Steve D" },
  { email: "dave@example.com", username: "Dave N" },
];

const mockGetUsers = getUsers as unknown as ReturnType<typeof vi.fn>;

describe("AsyncSelect component", () => {
  beforeEach(() => {
    vi.clearAllMocks();
    mockGetUsers.mockResolvedValue({ data: mockUsers });
  });

  it("Should render input and button", () => {
    render(
      <AuthProvider>
        <AsyncSelect setValue={vi.fn()} />
      </AuthProvider>,
    );

    expect(screen.getByRole("searchbox")).toBeInTheDocument();
    expect(screen.getByRole("button", { name: /add user emails/i })).toBeInTheDocument();
  });

  it("Should show user suggestions after typing 3 or more characters", async () => {
    render(
      <AuthProvider>
        <AsyncSelect setValue={vi.fn()} />
      </AuthProvider>,
    );

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "user" } });
    await waitFor(() => {
      expect(mockGetUsers).toHaveBeenCalledWith("/auth/admin/realms/master/users?email=user&briefRepresentation=true", "dummy-token");
      expect(screen.getByText("steve@example.com")).toBeInTheDocument();
      expect(screen.getByText("dave@example.com")).toBeInTheDocument();
    });
  });

  it("Should display 'No Results Found' if getUsers returns empty", async () => {
    mockGetUsers.mockResolvedValue({ data: [] });
    render(
      <AuthProvider>
        <AsyncSelect setValue={vi.fn()} />
      </AuthProvider>,
    );

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "nomatch" } });
    await waitFor(() => {
      expect(screen.getByText("No Results Found")).toBeInTheDocument();
    });
  });

  it("Should call setValue with selected user when button is clicked", async () => {
    const setValue = vi.fn();
    render(
      <AuthProvider>
        <AsyncSelect setValue={setValue} />
      </AuthProvider>,
    );

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "user" } });
    await waitFor(() => {
      expect(screen.getByText("steve@example.com")).toBeInTheDocument();
    });
    fireEvent.click(screen.getByText("steve@example.com"));
    fireEvent.click(screen.getByRole("button", { name: /add user emails/i }));

    expect(setValue).toHaveBeenCalledWith(mockUsers[0]);
  });

  it("Should not call getUsers if input length <= 2", () => {
    render(
      <AuthProvider>
        <AsyncSelect setValue={vi.fn()} />
      </AuthProvider>,
    );

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "us" } });
    expect(mockGetUsers).not.toHaveBeenCalled();
  });

  it("Should clear user suggestions when input is cleared", async () => {
    render(
      <AuthProvider>
        <AsyncSelect setValue={vi.fn()} />
      </AuthProvider>,
    );

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "user" } });
    await waitFor(() => {
      expect(screen.getByText("steve@example.com")).toBeInTheDocument();
    });

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "" } });
    await waitFor(() => {
      expect(screen.queryByText("steve@example.com")).not.toBeInTheDocument();
      expect(screen.queryByText("dave@example.com")).not.toBeInTheDocument();
    });
  });

  it("Should disable button until a user is selected", async () => {
    render(
      <AuthProvider>
        <AsyncSelect setValue={vi.fn()} />
      </AuthProvider>,
    );

    const button = screen.getByRole("button", { name: /add user emails/i });
    expect(button).toBeDisabled();

    fireEvent.change(screen.getByRole("searchbox"), { target: { value: "user" } });
    await waitFor(() => {
      fireEvent.click(screen.getByText("steve@example.com"));
      expect(button).not.toBeDisabled();
    });
  });
});
