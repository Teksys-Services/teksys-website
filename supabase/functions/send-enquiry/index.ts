import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { SMTPClient } from "https://deno.land/x/denomailer@1.6.0/mod.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

interface EnquiryRequest {
  type: "contact" | "chatbot";
  name: string;
  email: string;
  message?: string;
  company?: string;
  phone?: string;
  industry?: string;
  expectedUsers?: string;
  requirements?: string;
}

const handler = async (req: Request): Promise<Response> => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const data: EnquiryRequest = await req.json();
    console.log("Received enquiry:", data);

    const client = new SMTPClient({
      connection: {
        hostname: "smtp.hostinger.com",
        port: 465,
        tls: true,
        auth: {
          username: "admin@teksys-services.com",
          password: Deno.env.get("HOSTINGER_EMAIL_PASSWORD") || "",
        },
      },
    });

    let subject: string;
    let htmlContent: string;

    if (data.type === "contact") {
      subject = `New Contact Enquiry from ${data.name}`;
      htmlContent = `
        <h2>New Contact Enquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Message:</strong></p>
        <p>${data.message || "No message provided"}</p>
      `;
    } else {
      subject = `New Chatbot Service Enquiry from ${data.name}`;
      htmlContent = `
        <h2>New Chatbot Service Enquiry</h2>
        <p><strong>Name:</strong> ${data.name}</p>
        <p><strong>Email:</strong> ${data.email}</p>
        <p><strong>Company:</strong> ${data.company || "Not provided"}</p>
        <p><strong>Phone:</strong> ${data.phone || "Not provided"}</p>
        <p><strong>Industry:</strong> ${data.industry || "Not provided"}</p>
        <p><strong>Expected Users:</strong> ${data.expectedUsers || "Not provided"}</p>
        <p><strong>Requirements:</strong></p>
        <pre>${data.requirements || "No requirements provided"}</pre>
      `;
    }

    await client.send({
      from: "admin@teksys-services.com",
      to: "admin@teksys-services.com",
      replyTo: data.email,
      subject: subject,
      content: "auto",
      html: htmlContent,
    });

    await client.close();
    console.log("Email sent successfully");

    return new Response(
      JSON.stringify({ success: true, message: "Enquiry sent successfully" }),
      {
        status: 200,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  } catch (error: any) {
    console.error("Error sending enquiry:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
