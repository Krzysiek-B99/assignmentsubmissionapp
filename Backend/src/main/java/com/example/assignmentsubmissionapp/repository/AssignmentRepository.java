package com.example.assignmentsubmissionapp.repository;

import com.example.assignmentsubmissionapp.domain.Assignment;
import org.springframework.data.jpa.repository.JpaRepository;

public interface AssignmentRepository extends JpaRepository<Assignment,Long> {
}
