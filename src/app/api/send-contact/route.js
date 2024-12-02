import nodemailer from "nodemailer";

export async function POST(request) {
    const body = await request.json();
    const { firstName, lastName, title, company, email, phonenumber, message } = body;

    const transporter = nodemailer.createTransport({
        service: "Outlook",
        auth: {
            user: process.env.EMAIL,
            pass: process.env.EMAIL_PASSWORD,
        },
        tls: {
            rejectUnauthorized: false,
        },
    });

    const mailOptions = {
        from: process.env.EMAIL,
        to: process.env.EMAIL,
        subject: title,
        text: `
        You have received a new message from ${firstName} ${lastName}:

        Sender: ${email}
        Phone Number: ${phonenumber}
        Company: ${company}
        
        Message:
        ${message}
        `,
        replyTo: email,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: `Failed to send email: ${error.message}` }), { status: 500 });
    }
}
