package com.db.example.visual5;

import jakarta.persistence.Id;
import jakarta.persistence.Entity; 

@Entity
public class user {
    @Id
    private Long id;
    private String username;
    private String password;

    public user() {
    }

    public user(Long id, String username, String password) {
        this.id = id;
        this.username = username;
        this.password = password;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPassword() {
        return this.password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    public user username(String username) {
        setUsername(username);
        return this;
    }

    public user password(String password) {
        setPassword(password);
        return this;
    }
}
