import { expect, describe, it } from "vitest";
import { screen, render } from "@testing-library/react";
import App from "../src/App";

describe("App", () => {
  it("should render the App component", () => {
    render(<App />);
    expect(screen.getByTestId("app-root")).toBeInTheDocument();
  });
});
