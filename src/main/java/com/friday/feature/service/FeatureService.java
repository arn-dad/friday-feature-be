package com.friday.feature.service;

import com.friday.feature.dto.FeatureDto;
import com.friday.feature.model.Feature;

import java.util.List;
import java.util.Optional;

public interface FeatureService {
    FeatureDto getFeatureById(String featureId);
    List<FeatureDto> getAllFeatures();
    FeatureDto createFeature(FeatureDto feature);
    FeatureDto updateFeature(FeatureDto feature);
    FeatureDto deleteFeature(String id);
    List<FeatureDto>getFeaturesByCountry(String country);
}
