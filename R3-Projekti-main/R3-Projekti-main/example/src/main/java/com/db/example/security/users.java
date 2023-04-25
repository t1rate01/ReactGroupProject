package com.db.example.security;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class users {
    @Id
    private String username;
    private String pass;
    private String defaultview;


    public users() {
    }

    public users(String username, String pass, String defaultview) {
        this.username = username;
        this.pass = pass;
        this.defaultview = defaultview;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public String getPass() {
        return this.pass;
    }

    public void setPass(String pass) {
        this.pass = pass;
    }

    public String getDefaultview() {
        return this.defaultview;
    }

    public void setDefaultview(String defaultview) {
        this.defaultview = defaultview;
    }

    public users username(String username) {
        setUsername(username);
        return this;
    }

    public users pass(String pass) {
        setPass(pass);
        return this;
    }

    public users setdefaultview(String defaultview) {
        setDefaultview(defaultview);
        return this;
    }
}
