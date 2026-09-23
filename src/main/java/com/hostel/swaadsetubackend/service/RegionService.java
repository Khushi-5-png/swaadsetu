package com.hostel.swaadsetubackend.service;

import com.hostel.swaadsetubackend.entity.Region;
import com.hostel.swaadsetubackend.repository.RegionRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class RegionService {

    private final RegionRepository regionRepository;

    public RegionService(RegionRepository regionRepository) {
        this.regionRepository = regionRepository;
    }

    public List<Region> getAllRegions() {
        return regionRepository.findAll();
    }

    public Region addRegion(Region region) {
        return regionRepository.save(region);
    }
}