package com.db.example.SavedViews;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;
import java.util.Objects;

@Entity
public class savedview {
    @Id
    private String viewID;
    private String viewString;
    private String username;


    public savedview() {
    }

    public savedview(String viewID, String viewString, String username) {
        this.viewID = viewID;
        this.viewString = viewString;
        this.username = username;
    }

    public String getViewID() {
        return this.viewID;
    }

    public void setViewID(String viewID) {
        this.viewID = viewID;
    }

    public String getViewString() {
        return this.viewString;
    }

    public void setViewString(String viewString) {
        this.viewString = viewString;
    }

    public String getUsername() {
        return this.username;
    }

    public void setUsername(String username) {
        this.username = username;
    }

    public savedview viewID(String viewID) {
        setViewID(viewID);
        return this;
    }

    public savedview viewString(String viewString) {
        setViewString(viewString);
        return this;
    }

    public savedview username(String username) {
        setUsername(username);
        return this;
    }

}
