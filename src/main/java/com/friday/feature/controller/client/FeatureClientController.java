package com.friday.feature.controller.client;

import com.friday.feature.dto.FeatureDto;
import com.friday.feature.service.FeatureService;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/v1/client/feature")
@CrossOrigin(origins = "*", allowedHeaders = "*")
@Slf4j
public class FeatureClientController {
    @Autowired
    FeatureService featureService;


    @RequestMapping(path = "/country", method = RequestMethod.GET)
    @CrossOrigin(origins = "http://localhost:5050")
    public ResponseEntity<List<FeatureDto>> getFeaturesByCountry(@RequestParam("country") String country) {
        List<FeatureDto> features = featureService.getFeaturesByCountry(country);
        return new ResponseEntity<List<FeatureDto>>(features, HttpStatus.OK);
    }
}
