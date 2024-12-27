import nodemailer from "nodemailer";
// app/api/send-email/route.js

export async function POST(req) {
  try {
    const { firstName, lastName, email, phone, message } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email format" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    console.log("ok", process.env.SMTP_USER);
    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com", // Example for Gmail
      port: 587,

      auth: {
        user: process.env.SMTP_USER, // Your email address (from environment variables)
        pass: process.env.SMTP_PASS, // Your email password (from environment variables)
      },
    });

    let name = firstName + " " + lastName;

    // Email options
    const mailOptions = {
      from: `"${name}" <${email}>`, // Sender's email and name
      to: "mrm.leon93@gmail.com", // Your email address to receive messages
      subject: "New Contact Form Submission",
      text: `You have a new message from ${name} (${email}, ${
        phone || "No phone number provided"
      }):\n\n${message}`,
      html: `<p>You have a new message from <b>${name}</b> (<a href="mailto:${email}">${email}</a>, ${
        phone || "No phone number provided"
      }):</p><p>${message}</p>`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    // Successful response
    return new Response(
      JSON.stringify({ message: "Message sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error handling request:", error);
    ``;
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
    ``;
  }
  ``;
}
