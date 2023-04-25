package com.db.example.visual5;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Sub_sector {
    @Id
    private String subsector;
    private String share;
    private String sector_name;



    public Sub_sector() {
    }

    public Sub_sector(String subsector, String share, String sector_name) {
        this.subsector = subsector;
        this.share = share;
        this.sector_name = sector_name;
    }

    public String getSubsector() {
        return this.subsector;
    }

    public void setSubsector(String subsector) {
        this.subsector = subsector;
    }

    public String getShare() {
        return this.share;
    }

    public void setShare(String share) {
        this.share = share;
    }

    public String getSector_name() {
        return this.sector_name;
    }

    public void setSector_name(String sector_name) {
        this.sector_name = sector_name;
    }

    public Sub_sector subsector(String subsector) {
        setSubsector(subsector);
        return this;
    }

    public Sub_sector share(String share) {
        setShare(share);
        return this;
    }

    public Sub_sector sector_name(String sector_name) {
        setSector_name(sector_name);
        return this;
    }
}
   