package com.canitas.portfoliowebsite.repository;

import com.canitas.portfoliowebsite.model.Project;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ProjectRepository extends JpaRepository<Project, Long> {
}
