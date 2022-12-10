package com.example.assignmentsubmissionapp.web;


import com.example.assignmentsubmissionapp.domain.Assignment;
import com.example.assignmentsubmissionapp.domain.User;
import com.example.assignmentsubmissionapp.service.AssignmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.web.bind.annotation.*;

import java.util.Optional;
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
    @GetMapping("{assignmentId}")
    public ResponseEntity<?> getAssignments (@PathVariable Long assignmentId, @AuthenticationPrincipal User user){
        Optional<Assignment> assignmentOpt = assignmentService.findById(assignmentId);
        return ResponseEntity.ok(assignmentOpt.orElse(new Assignment()));
    }
}
