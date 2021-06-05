package com.friday.feature.repository.feature;

import com.friday.feature.dto.FeatureDto;
import com.friday.feature.model.Feature;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import java.util.List;

public interface FeatureRepository extends MongoRepository<Feature, String> {
    @Query("{'selectors.country': ?0}")
    List<Feature> getFeaturesByCountry(String country);
}
