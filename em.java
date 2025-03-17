```java
import java.io.IOException;
import java.util.Properties;
import javax.mail.*;
import javax.mail.internet.*;
import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/subscribe")
public class SubscribeServlet extends HttpServlet {

    private static final String SMTP_HOST_NAME = "smtp.example.com";
    private static final String SMTP_PORT = "587";
    private static final String SMTP_AUTH_USER = "dboss9930@gmail.com";
    private static final String SMTP_AUTH_PWD = "GODSOWN200702";

    protected void doPost(HttpServletRequest request, HttpServletResponse response)
            throws ServletException, IOException {
        String email = request.getParameter("email");
        sendWelcomeEmail(email);
        response.getWriter().println("Subscription successful!");
    }

    private void sendWelcomeEmail(String to) {
        Properties props = new Properties();
        props.put("mail.smtp.host", SMTP_HOST_NAME);
        props.put("mail.smtp.port", SMTP_PORT);
        props.put("mail.smtp.auth", "true");
        props.put("mail.smtp.starttls.enable", "true");

        Authenticator auth = new Authenticator() {
            protected PasswordAuthentication getPasswordAuthentication() {
                return new PasswordAuthentication(SMTP_AUTH_USER, SMTP_AUTH_PWD);
            }
        };
       
        Session session = Session.getInstance(props, auth);

        try {
            Message message = new MimeMessage(session);
            message.setFrom(new InternetAddress(SMTP_AUTH_USER));
            message.setRecipients(Message.RecipientType.TO, InternetAddress.parse(to));
            message.setSubject("Welcome to Penel Homes!");
            message.setText("Dear Subscriber,\n\nWelcome to Penel Homes! We are delighted to have you with us.\n\nBest Regards,\nPenel Homes Team");

            Transport.send(message);

        } catch (MessagingException e) {
            e.printStackTrace();
        }
    }
}
```

### Deploying the Application

1. **Package the application into a WAR file** to deploy on a Servlet container like Tomcat.
2. **Configure the web.xml** if you are not using annotations (this step can be skipped due to the `@WebServlet` annotation).

Here's an example `web.xml` if you're not using annotations:

```xml
<web-app xmlns="http://xmlns.jcp.org/xml/ns/javaee"
         xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
         xsi:schemaLocation="http://xmlns.jcp.org/xml/ns/javaee
         http://xmlns.jcp.org/xml/ns/javaee/web-app_4_0.xsd"
         version="4.0">

    <servlet>
        <servlet-name>SubscribeServlet</servlet-name>
        <servlet-class>your.package.SubscribeServlet</servlet-class>
    </servlet>

    <servlet-mapping>
        <servlet-name>SubscribeServlet</servlet-name>
        <url-pattern>/subscribe</url-pattern>
    </servlet-mapping>

</web-app>