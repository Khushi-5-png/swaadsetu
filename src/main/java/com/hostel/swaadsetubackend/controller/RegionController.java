package com.hostel.swaadsetubackend.controller;

import com.hostel.swaadsetubackend.entity.Region;
import com.hostel.swaadsetubackend.service.RegionService;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/regions")
@CrossOrigin(origins = "http://localhost:4200")
public class RegionController {

    private final RegionService regionService;

    public RegionController(RegionService regionService) {
        this.regionService = regionService;
    }

    @GetMapping
    public List<Region> getAllRegions() {
        return regionService.getAllRegions();
    }

    @PostMapping
    public Region addRegion(@RequestBody Region region) {
        return regionService.addRegion(region);
    }
}