package com.db.example.visual5;
import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class sector {
    @Id
    private String sector;
    private String share;
    

    public sector(String sector, String share) {
        this.sector = sector;
        this.share = share;
    }

    public sector() {
    }

    public String getSector() {
        return this.sector;
    }

    public void setSector(String sector) {
        this.sector = sector;
    }

    public String getShare() {
        return this.share;
    }

    public void setShare(String share) {
        this.share = share;
    }

    public sector Sector(String sector) {
        setSector(sector);
        return this;
    }

    public sector share(String share) {
        setShare(share);
        return this;
    }

}
