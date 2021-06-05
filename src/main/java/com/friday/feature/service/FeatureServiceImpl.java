package com.friday.feature.service;

import com.friday.feature.dto.FeatureDto;
import com.friday.feature.model.Feature;
import com.friday.feature.repository.feature.FeatureRepository;
import org.modelmapper.ModelMapper;
import org.modelmapper.convention.MatchingStrategies;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Component
public class FeatureServiceImpl implements FeatureService {

    @Autowired
    FeatureRepository featureRepository;

    @Override
    public List<FeatureDto> getFeaturesByCountry(String country) {
        List<Feature> featureList = featureRepository.getFeaturesByCountry(country);

        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        List<FeatureDto> newFeatureList = new ArrayList<FeatureDto>();

        for (Feature fte: featureList) {
            FeatureDto mappedFeature = modelMapper.map(fte, FeatureDto.class);
            newFeatureList.add(mappedFeature);
        }

        return newFeatureList;
    }

    @Override
    public FeatureDto getFeatureById(String featureId) {
        Optional<Feature> feature = featureRepository.findById(featureId);

        if (feature.isPresent()) {
            ModelMapper modelMapper = new ModelMapper();
            modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
            FeatureDto returnValue = modelMapper.map(feature, FeatureDto.class);
            return returnValue;
        }
        // exception handling here
        return null;
    }

    @Override
    public List<FeatureDto> getAllFeatures() {
        List <Feature> featureList = featureRepository.findAll();
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);
        List<FeatureDto> newFeatureList = new ArrayList<FeatureDto>();
        for (Feature fte: featureList) {
            FeatureDto mappedFeature = modelMapper.map(fte, FeatureDto.class);
            newFeatureList.add(mappedFeature);
        }

        return newFeatureList;
    }

    @Override
    public FeatureDto createFeature(FeatureDto feature) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        Feature valueToSave = modelMapper.map(feature, Feature.class);
        Feature createdFeature = featureRepository.save(valueToSave);
        FeatureDto returnValue = modelMapper.map(createdFeature, FeatureDto.class);

        return returnValue;
    }

    @Override
    public FeatureDto updateFeature(FeatureDto feature) {
        ModelMapper modelMapper = new ModelMapper();
        modelMapper.getConfiguration().setMatchingStrategy(MatchingStrategies.STRICT);

        Feature valueToSave = modelMapper.map(feature, Feature.class);
        Feature updatedFeature = featureRepository.save(valueToSave);
        FeatureDto returnValue = modelMapper.map(updatedFeature, FeatureDto.class);

        return returnValue;
    }

    @Override
    public FeatureDto deleteFeature(String id) {
        featureRepository.deleteById(id);
        return null;
    }
}
