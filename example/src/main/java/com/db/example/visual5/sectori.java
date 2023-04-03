package com.db.example.visual5;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;


@Entity
public class sectori {
    @Id
    private String Sector;
    private String share;
    

    public sectori(String Sector, String share) {
        this.Sector = Sector;
        this.share = share;
    }

    public sectori() {
    }

    public String getSector() {
        return this.Sector;
    }

    public void setSector(String Sector) {
        this.Sector = Sector;
    }

    public String getShare() {
        return this.share;
    }

    public void setShare(String share) {
        this.share = share;
    }

    public sectori Sector(String Sector) {
        setSector(Sector);
        return this;
    }

    public sectori share(String share) {
        setShare(share);
        return this;
    }

}
