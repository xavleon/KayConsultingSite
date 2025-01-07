import nodemailer from "nodemailer";

export async function POST(req) {
  try {
    const { firstName, lastName, file } = await req.json();

    // Validate required fields
    if (!firstName || !lastName || !file) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        {
          status: 400,
          headers: { "Content-Type": "application/json" },
        }
      );
    }

    // Create a transporter
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    // Email options
    const mailOptions = {
      from: `"${firstName} ${lastName}" <${process.env.SMTP_USER}>`,
      to: "keleon1212@gmail.com",
      subject: "New Document Submission",
      text: `You have received a document from ${firstName} ${lastName}.`,
      attachments: [
        {
          filename: file.name,
          content: Buffer.from(file.content, "base64"), // Decode Base64 content
          contentType: file.type, // Set MIME type
        },
      ],
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    return new Response(
      JSON.stringify({ message: "Document submitted successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json" },
      }
    );
  } catch (error) {
    console.error("Error handling request:", error);
    return new Response(JSON.stringify({ error: "Internal server error" }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
