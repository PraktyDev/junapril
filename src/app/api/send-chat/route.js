import nodemailer from "nodemailer"

export async function POST(request){
    const body = await request.json()
    const { name, email, message } = body
    

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
        subject: `New Chat Message from ${name}`,
        text: `
        You have received a new chat message from ${name}:

        Sender: ${email}
        
        Message:
        ${message}
        `,
        replyTo: email,
    }


    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: "Email sent successfully" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: `Failed to send email: ${error.message}` }), { status: 500 });
    }
}
