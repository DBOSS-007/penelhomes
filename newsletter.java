@SpringBootApplication
@RestController
package com.example.formhandler;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestParam;

@SpringBootApplication
public class FormHandlerApplication {

    public static void main(String[] args) {
        SpringApplication.run(FormHandlerApplication.class, args);
    }
}

@Controller
public class FormController {

    @GetMapping("/")
    public String showForm() {
        return "form";
    }

    @PostMapping("/submitForm")
    public String submitForm(
            @RequestParam("name") String name,
            @RequestParam("email") String email,
            @RequestParam("phoneNumber") String phoneNumber,
            @RequestParam("message") String message,
            Model model) {

        // Process the form data (e.g., save to a database, send an email, etc.)

        // Add form data to the model to display on a confirmation page
        model.addAttribute("name", name);
        model.addAttribute("email", email);
        model.addAttribute("phoneNumber", phoneNumber);
        model.addAttribute("message", message);

        return "formSuccess";
    }
}