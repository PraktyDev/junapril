import nodemailer from "nodemailer";

export async function POST(request) {
    const body = await request.json();
    const { email } = body;

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
        replyTo: email,
        subject: "New Subscriber",
        text: `You have a new subscriber with email: ${email}`,
    };

    try {
        await transporter.sendMail(mailOptions);
        return new Response(JSON.stringify({ message: "Successfully Subscribed" }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ error: `Failed to Subscribe: ${error.message}` }), { status: 500 });
    }
}
