import React from "react";

const LoginPage = () => {

    function loginBtn() {
        console.log("login button pressed");
        var username = document.getElementsByName("username");
        var password = document.getElementsByName("password");
        login(username,password);
    }

    async function login(username, password) {
        const response = await fetch('http://localhost:8080/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        });
        const data = await response.json();
        console.log(data);
    }


    return (
        <div>
            <h1>Log in</h1>
            <form>
                <label>
                    Username:
                    <input type="text" name="username" />
                </label>
                <label>
                    Password:
                    <input type="password" name="password" />
                </label>
                <button onClick={loginBtn()}>Log in</button>
            </form>
        </div>
    )
}

export default LoginPage;