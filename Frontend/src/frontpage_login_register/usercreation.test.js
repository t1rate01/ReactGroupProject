import React from "react";

import { render, fireEvent } from "@testing-library/react";
import App from '../App';

import RegisterPage from "./registerpage";

describe("RegisterPage", () => {
  it("renders all components correctly", () => {
    const { getByLabelText, getByText } = render(<RegisterPage />);
    const usernameInput = getByLabelText("Username:");
    const passwordInput = getByLabelText("Password:");
    const registerButton = getByText("Register");
    const backButton = getByText("Back");
    
    expect(usernameInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(registerButton).toBeInTheDocument();
    expect(backButton).toBeInTheDocument();
  });
  });