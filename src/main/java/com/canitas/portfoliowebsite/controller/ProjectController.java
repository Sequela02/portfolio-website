package com.canitas.portfoliowebsite.controller;

import com.canitas.portfoliowebsite.model.Project;
import com.canitas.portfoliowebsite.service.ProjectService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/projects")
public class ProjectController {
    @Autowired
    private ProjectService projectService;

    @GetMapping
    public List<Project> getAllProjects() {
        return projectService.getAllProjects();
    }
    // Ejemplo en ProjectController.java
// Corrección en ProjectController.java
    @GetMapping("/example")
    public List<Project> getExampleProjects() {
        Project project1 = new Project();
        project1.setId(1L);
        project1.setTitle("Proyecto 1");
        project1.setDescription("Descripción del Proyecto 1");
        project1.setTechnology("Java, Spring Boot");

        Project project2 = new Project();
        project2.setId(2L);
        project2.setTitle("Proyecto 2");
        project2.setDescription("Descripción del Proyecto 2");
        project2.setTechnology("React, Tailwind CSS");

        return List.of(project1, project2);
    }


    // Other controller methods
}
