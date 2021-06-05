package com.friday.feature.dto;

import java.util.ArrayList;
import java.util.List;

public class SelectorsDto {
    private List<String> country = new ArrayList<>();

    public List<String> getCountry() {
        return country;
    }

    public void setCountry(List<String> country) {
        this.country = country;
    }
}
