package com.hostel.swaadsetubackend.repository;

import com.hostel.swaadsetubackend.entity.Region;
import org.springframework.data.jpa.repository.JpaRepository;

public interface RegionRepository extends JpaRepository<Region, Long> {
}