package com.example.assignmentsubmissionapp.repository;

import com.example.assignmentsubmissionapp.domain.Assignment;
import com.example.assignmentsubmissionapp.domain.User;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Set;

public interface AssignmentRepository extends JpaRepository<Assignment,Long> {

    Set<Assignment> findByUser(User user);
}
