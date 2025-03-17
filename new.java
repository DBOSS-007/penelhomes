import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;

public class PenelHomesNewsletter {
   
    public static void main(String[] args) {
        // Email credentials
        final String username = "dboss9930@example.com";
        final String password = "GODSOWN200702";

        // Recipient's email ID
        String to = "new-subscriber@example.com";

        // SMTP server information
        String host = "smtp.example.com";
        Properties props = new Properties();
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");
        props.put("mail.smtp.host", host);
        props.put("mail.smtp.port", "587");

        // Get the Session object
        Session session = Session.getInstance(props,
          new javax.mail.Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(username, password);
            }
          });

        try {
            // Create a default MimeMessage object
            Message message = new MimeMessage(session);

            // Set From: header field
            message.setFrom(new InternetAddress(username));

            // Set To: header field
            message.setRecipients(Message.RecipientType.TO,
                InternetAddress.parse(to));

            // Set Subject: header field
            message.setSubject("Welcome to Penel Homes!");

            // Set the actual message
            message.setText("Dear Subscriber,\n\nWelcome to Penel Homes! We are delighted to have you with us.\n\nBest Regards,\nPenel Homes Team");

            // Send the message
            Transport.send(message);

            System.out.println("Email sent successfully!");

        } catch (MessagingException e) {
            throw new RuntimeException(e);
        }
    }
}
