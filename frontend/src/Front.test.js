import { render, screen } from '@testing-library/react';
import TaskmanagementdashboardPage from "./pages/Taskmanagementdashboard/index";


describe("TaskmanagementdashboardPage", () => {
  test("renders TaskmanagementdashboardPage component", () => {
    render(<TaskmanagementdashboardPage />);
    const headingElement = screen.getByText(/Gestor Manager/i);
    expect(headingElement).toBeInTheDocument();
  });
});

test("renders subheading with correct text", () => {
  render(<TaskmanagementdashboardPage />);
  const subheadingElement = screen.getByText(/Gestor de tareas empresarial/i);
  expect(subheadingElement).toBeInTheDocument();
});

test("clicking plus button triggers action", () => {
  render(<TaskmanagementdashboardPage />);
  const plusButton = screen.getByAltText("plus");
  expect(plusButton).toBeInTheDocument();
});

