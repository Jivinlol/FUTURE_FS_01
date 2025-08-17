package com.example.taskone_backend.Controller;
import com.example.taskone_backend.DTO.Contact;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/contact")
@CrossOrigin(origins = "http://localhost:5173")  // allow frontend dev server
public class ContactController {

    @PostMapping
    public String receiveContact(@RequestBody Contact contactMessage) {
        // Here you could save to DB, send email, etc.
        System.out.println("New message from: " + contactMessage.getName() +
                " (" + contactMessage.getEmail() + ")");
        System.out.println("Message: " + contactMessage.getMessage());

        return "Message received successfully!";
    }
}
