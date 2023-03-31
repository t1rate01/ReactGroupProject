package com.db.example;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Sub_sector {
    @Id
    private String subsector;
    private String share;


    public Sub_sector() {
    }

    public Sub_sector(String subsector, String share) {
        this.subsector = subsector;
        this.share = share;
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

    public Sub_sector subsector(String subsector) {
        setSubsector(subsector);
        return this;
    }

    public Sub_sector share(String share) {
        setShare(share);
        return this;
    }

    
}
