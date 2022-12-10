package com.example.assignmentsubmissionapp.web;


import com.example.assignmentsubmissionapp.domain.Assignment;
import com.example.assignmentsubmissionapp.domain.User;
import com.example.assignmentsubmissionapp.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Set;

@RestController
@RequestMapping("api/assignments")
public class AssignmentController {

    private final AssignmentService assignmentService;

    public AssignmentController(AssignmentService assignmentService) {
        this.assignmentService = assignmentService;
    }

    @PostMapping("")
    public ResponseEntity<?> createAssignment (@AuthenticationPrincipal User user){
         Assignment newAssignment = assignmentService.save(user);

         return ResponseEntity.ok(newAssignment);
    }
    @GetMapping()
    public ResponseEntity<?> getAssignments (@AuthenticationPrincipal User user){
        Set<Assignment> assignmentsByUser = assignmentService.findByUser(user);
        return ResponseEntity.ok(assignmentsByUser);
    }
}
