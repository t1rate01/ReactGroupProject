import React from 'react';
import { render, screen,  cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import RegisterPage from './registerpage';
import { BrowserRouter } from 'react-router-dom';


beforeEach(() => {
    cleanup();
    localStorage.clear();
  });

test('Render the page', async() => {
  render(<BrowserRouter>
  <RegisterPage />
  </BrowserRouter>);
    
    //</RegisterPage>const registerbutton = screen.getByTestId('sign in');
   // await userEvent.click(registerbutton);
    const formUsername = screen.getByTestId('username');
    const formPassword = screen.getByTestId('password');
    const submitButton = screen.getByTestId('regbtn');
    
    expect(formUsername).toBeInTheDocument();
    expect(formPassword).toBeInTheDocument();
    expect(submitButton).toBeInTheDocument();

});

test('Register with empty username and password', async() => {
    const user = userEvent;

    render(<BrowserRouter>
        <RegisterPage />
        </BrowserRouter>);


    const submitButton = screen.getByTestId('regbtn');

    await act (async() => {
    await user.click(submitButton);
    });

    expect(screen.getByText('Registration failed! Check fields!')).toBeInTheDocument();
});

test('Register a new test account', async() => {
    const user = userEvent;

    render(<BrowserRouter>
        <RegisterPage />
        </BrowserRouter>);

    const formUsername = screen.getByTestId('username');
    const formPassword = screen.getByTestId('password');
    const submitButton = screen.getByTestId('regbtn');

    await act (async() => {
    await user.type(formUsername, 'testiuser');
    await user.type(formPassword, 'testopassword');
    await user.click(submitButton);
    await new Promise(resolve => setTimeout(resolve, 1000));
    });

    expect(screen.getByText('Registration successful!')).toBeInTheDocument();
});

test('Try to register test account with existing username, expect fail', async() => {
    const user = userEvent;

    render(<BrowserRouter>
        <RegisterPage />
        </BrowserRouter>);

    const formUsername = screen.getByTestId('username');
    const formPassword = screen.getByTestId('password');
    const submitButton = screen.getByTestId('regbtn');

    await act (async() => {
        await user.type(formUsername, 'testiuser');
        await user.type(formPassword, 'testopassword');
        await user.click(submitButton);
        await new Promise(resolve => setTimeout(resolve, 1000));
    });

    expect(screen.getByText('Registration failed! Check fields!')).toBeInTheDocument();
});