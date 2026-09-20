package com.safeguard.controller;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.*;

@RestController
@RequestMapping("/api/requests")
@CrossOrigin(origins = "*")
public class RequestController {

    private final List<Map<String, String>> requestDatabase = new ArrayList<>();

    @PostMapping
    public ResponseEntity<Map<String, String>> createRequest(@RequestBody Map<String, String> request) {
        String trackingId = "REQ-" + (requestDatabase.size() + 101);
        request.put("id", trackingId);
        request.put("status", "Pending");
        
        requestDatabase.add(request);
        
        Map<String, String> response = new HashMap<>();
        response.put("status", "Success");
        response.put("id", trackingId);
        return ResponseEntity.ok(response);
    }

    @GetMapping
    public ResponseEntity<List<Map<String, String>>> getAllRequests() {
        return ResponseEntity.ok(requestDatabase);
    }
}