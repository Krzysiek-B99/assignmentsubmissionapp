package com.example.assignmentsubmissionapp.service;

import com.example.assignmentsubmissionapp.domain.Assignment;
import com.example.assignmentsubmissionapp.domain.User;
import com.example.assignmentsubmissionapp.repository.AssignmentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Set;

@Service
public class AssignmentService {

    @Autowired
    private AssignmentRepository assignmentRepository;

    public Assignment save(User user) {
        Assignment assignment = new Assignment();
        assignment.setStatus("Needs to be submitted");
        assignment.setUser(user);
         return assignmentRepository.save(assignment);
    }
    public Set<Assignment> findByUser(User user){
        return  assignmentRepository.findByUser(user);
    }
}
