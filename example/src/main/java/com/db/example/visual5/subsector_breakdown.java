package com.db.example.visual5;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class subsector_breakdown {
    @Id
    private String Sub_sector;
    private String sector_Share;

    public subsector_breakdown() {
    }

    public subsector_breakdown(String Sub_sector, String sector_Share) {
        this.Sub_sector = Sub_sector;
        this.sector_Share = sector_Share;
    }

    public String getSub_sector() {
        return this.Sub_sector;
    }

    public void setSub_sector(String Sub_sector) {
        this.Sub_sector = Sub_sector;
    }

    public String getSector_Share() {
        return this.sector_Share;
    }

    public void setSector_Share(String sector_Share) {
        this.sector_Share = sector_Share;
    }

    public subsector_breakdown Sub_sector(String Sub_sector) {
        setSub_sector(Sub_sector);
        return this;
    }

    public subsector_breakdown sector_Share(String sector_Share) {
        setSector_Share(sector_Share);
        return this;
    }

}