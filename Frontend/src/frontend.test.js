import React from 'react';
import { render, screen,  cleanup } from '@testing-library/react';
import { act } from 'react-dom/test-utils';
import userEvent from '@testing-library/user-event'
import '@testing-library/jest-dom/extend-expect'
import RegisterPage from './frontpage_login_register/registerpage';
import { BrowserRouter } from 'react-router-dom';
import LoginPage from './frontpage_login_register/loginpage';
import {  getToken, clearToken } from './frontpage_login_register/tokenStorage';
import DefaultMenu from './menuviews/defaultmenu';

beforeEach(() => {
    cleanup();
    localStorage.clear();
  });

test('Render the registering page', async() => {
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

test('Register with empty username and password, expect "Registration Failed" text', async() => {
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

test('Register a new test account with valid inputs', async() => {
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

test('Try to register test account with existing/the same username, expect fail', async() => {
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


test('Render the loginpage', async() => {
    render(<BrowserRouter>
    <LoginPage />
    </BrowserRouter>);
      
  
      const formUsername = screen.getByTestId('username');
      const formPassword = screen.getByTestId('password');
      const submitButton = screen.getByTestId('logbtn');
      
      expect(formUsername).toBeInTheDocument();
      expect(formPassword).toBeInTheDocument();
      expect(submitButton).toBeInTheDocument();
  
  });
  
  test('Login with empty username and password, expect failmessage', async() => {
      const user = userEvent;
  
      render(<BrowserRouter>
          <LoginPage />
          </BrowserRouter>);
      
      const submitButton = screen.getByTestId('logbtn');
      
      await act (async() => {
      await user.click(submitButton);
      await new Promise(resolve => setTimeout(resolve, 1000));
      }
      );
  
      expect(screen.getByText('Login failed!')).toBeInTheDocument();
  });
  
  
  test('Login with wrong username and password, expect failmessage', async() => {
      const user = userEvent;
  
      render(<BrowserRouter>
          <LoginPage />
          </BrowserRouter>);
  
      const formUsername = screen.getByTestId('username');
      const formPassword = screen.getByTestId('password');
      const submitButton = screen.getByTestId('logbtn');
  
      await act (async() => {
      await user.type(formUsername, 'testuser123');
      await user.type(formPassword, 'testpassword123');
      await user.click(submitButton);
      await new Promise(resolve => setTimeout(resolve, 1000));
      }
      );
  
      expect(screen.getByText('Login failed!')).toBeInTheDocument();
  
  });
  
  test('Login with correct username and password, expect successmessage', async() => {
      const user = userEvent;
  
      render(<BrowserRouter>
          <LoginPage />
          </BrowserRouter>);
  
      const formUsername = screen.getByTestId('username');
      const formPassword = screen.getByTestId('password');
      const submitButton = screen.getByTestId('logbtn');
  
      await act (async() => {
      await user.type(formUsername, 'testiuser');
      await user.type(formPassword, 'testopassword');
      await user.click(submitButton);
      await new Promise(resolve => setTimeout(resolve, 1000));
      }
      );
  
      expect(screen.getByText('Success!')).toBeInTheDocument();
  
  });
  
  test('Login with correct username and password and check token, then clear token', async() => {
      const user = userEvent;
      clearToken();
  
      render(<BrowserRouter>
          <LoginPage />
          </BrowserRouter>);
  
      const formUsername = screen.getByTestId('username');
      const formPassword = screen.getByTestId('password');
      const submitButton = screen.getByTestId('logbtn');
  
      await act (async() => {
          await user.type(formUsername, 'testiuser');
          await user.type(formPassword, 'testopassword');
          await user.click(submitButton);
          await new Promise(resolve => setTimeout(resolve, 1000));
          }
          );
  
      expect(screen.getByText('Success!')).toBeInTheDocument();
      expect(getToken()).not.toBe(null);
      clearToken();
      expect(getToken()).toBe(null);
          
  });
  
  

test('Login correctly and attempt to access secret data with token, expect 200 OK response', async () => {
    const user = userEvent;
    clearToken();

    render(<BrowserRouter>
        <LoginPage />
        </BrowserRouter>);
    

    const formUsername = screen.getByTestId('username');
    const formPassword = screen.getByTestId('password');
    const submitButton = screen.getByTestId('logbtn');

    await act (async() => {
    await user.type(formUsername, 'testiuser');
    await user.type(formPassword, 'testopassword');
    await user.click(submitButton);
    await new Promise(resolve => setTimeout(resolve, 1000));
    }
    );

    expect(getToken()).not.toBeNull();
    const token = getToken();

    try {
        const response = await fetch(baseURL +'/api/users/private', {
            method: 'GET',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'Authorization': `Bearer ` + token,
            }
        });
        expect(response.status).toBe(200);
    } catch (error) {
        console.error(error);
    }
});



    
        


test('Login, get token and get to the menu, expect to see a button only in the menu', async() => {
    const user = userEvent;
    clearToken();

    render(<BrowserRouter>
        <LoginPage />
        </BrowserRouter>);
    

    const formUsername = screen.getByTestId('username');
    const formPassword = screen.getByTestId('password');
    const submitButton = screen.getByTestId('logbtn');

    await act (async() => {
    await user.type(formUsername, 'testiuser');
    await user.type(formPassword, 'testopassword');
    await user.click(submitButton);
    await new Promise(resolve => setTimeout(resolve, 1000));
    }
    );

    expect(getToken()).not.toBeNull();

    render(<BrowserRouter>
        <DefaultMenu />
        </BrowserRouter>);

    const deleteButton = screen.getByTestId('deleteBtn');

    expect(deleteButton).toBeInTheDocument();

});

test('Login, get token and get to the menu, then delete user, confirm by expecting token to be null', async() => {
    const user = userEvent;
    clearToken();

    render(<BrowserRouter>
        <LoginPage />
        </BrowserRouter>);
    

    const formUsername = screen.getByTestId('username');
    const formPassword = screen.getByTestId('password');
    const submitButton = screen.getByTestId('logbtn');

    await act (async() => {
    await user.type(formUsername, 'testiuser');
    await user.type(formPassword, 'testopassword');
    await user.click(submitButton);
    await new Promise(resolve => setTimeout(resolve, 1000));
    }
    );

    expect(getToken()).not.toBeNull();

    render(<BrowserRouter>
        <DefaultMenu />
        </BrowserRouter>);

    const deleteButton = screen.getByTestId('deleteBtn');

    expect(deleteButton).toBeInTheDocument();
    
    await act (async() => {
    await user.click(deleteButton);
    await new Promise(resolve => setTimeout(resolve, 1000));
    }
    );

    expect(getToken()).toBeNull();

});

