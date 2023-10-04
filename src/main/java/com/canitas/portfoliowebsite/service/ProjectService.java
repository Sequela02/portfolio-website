package com.canitas.portfoliowebsite.service;

import com.canitas.portfoliowebsite.model.Project;
import com.canitas.portfoliowebsite.repository.ProjectRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ProjectService {
    @Autowired
    private ProjectRepository projectRepository;

    public List<Project> getAllProjects() {
        return projectRepository.findAll();
    }

    // Other service methods
}
