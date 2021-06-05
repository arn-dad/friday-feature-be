package com.friday.feature.controller.api;

import com.friday.feature.dto.FeatureDto;
import com.friday.feature.service.FeatureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/feature")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class FeatureController {

    @Autowired
    FeatureService featureService;

    @GetMapping("status/check")
    public String status() {
        return "RUNNING!";
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.GET)
    public ResponseEntity<FeatureDto> getFeatureById(@PathVariable("id") String id) {
        FeatureDto feature = featureService.getFeatureById(id);

        if (feature != null) {
            return new ResponseEntity<FeatureDto>(feature, HttpStatus.OK);
        }
        return new ResponseEntity<FeatureDto>(HttpStatus.NOT_FOUND);
    }



    @RequestMapping(method = RequestMethod.GET)
    public ResponseEntity<List<FeatureDto>> getAllFeatures() {
        List<FeatureDto> features = featureService.getAllFeatures();

        return new ResponseEntity<List<FeatureDto>>(features, HttpStatus.OK);
    }

    @RequestMapping(method = RequestMethod.POST)
    public ResponseEntity<FeatureDto> getFeatureById(@RequestBody FeatureDto feature) {
        FeatureDto createdFeature = featureService.createFeature(feature);

        if (createdFeature != null) {
            return new ResponseEntity<FeatureDto>(createdFeature, HttpStatus.CREATED);
        }

        return new ResponseEntity<FeatureDto>(HttpStatus.BAD_REQUEST);
    }

    @RequestMapping(method = RequestMethod.PUT)
    public ResponseEntity<FeatureDto> updateFeature(@RequestBody FeatureDto feature) {
        FeatureDto createdFeature = featureService.updateFeature(feature);
        return ResponseEntity.status(HttpStatus.OK).body(createdFeature);
    }

    @RequestMapping(value = "/{id}", method = RequestMethod.DELETE)
    public ResponseEntity deleteFeature(@PathVariable("id") String id) {
        log.info("DELETE: " + id);
        featureService.deleteFeature(id);
        return new ResponseEntity(HttpStatus.OK);
    }
}

