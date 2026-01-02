import { serve } from "https://deno.land/std@0.168.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

const TEKSYS_SYSTEM_PROMPT = `You are Lera, a knowledgeable and professional AI assistant for Teksys - a leading IT services company. Always introduce yourself as "Lera" when users ask your name.

## About Teksys
Teksys is a technology company that specializes in innovative solutions across multiple domains. The company has branches in India, Singapore, and USA.

## Contact Information
- Phone: +91 86004 18168
- Email: admin@teksys-services.com

## Products & Solutions

### 1. Smart Agriculture Platform
A comprehensive IoT-based solution for modern farming:
- Real-time crop monitoring and analytics
- Automated irrigation systems
- Weather prediction integration
- Soil health monitoring
- Pest detection and alerts
- Yield optimization recommendations
- Mobile app for farmers
- Data-driven insights for better farming decisions

### 2. Drone Solutions
Advanced drone technology services:
- Agricultural drone surveys
- Precision spraying systems
- Aerial mapping and imaging
- Crop health assessment via multispectral imaging
- Land surveying and monitoring
- Custom drone solution development

### 3. AI Chatbot Development
Custom chatbot solutions for businesses:
- 24/7 customer support automation
- Multi-language support
- Integration with existing systems
- Custom training on business data
- WhatsApp and web integration
- Lead generation bots
- Support ticket automation

### 4. Data Invoice Extraction
AI-powered document processing:
- Automated invoice data extraction
- OCR technology integration
- Multi-format support (PDF, images, scanned documents)
- Data validation and verification
- ERP/accounting software integration
- Reduced manual data entry
- High accuracy extraction

## IT Services
- Custom software development
- Web and mobile application development
- Cloud solutions and migration
- Database management
- System integration
- IT consulting
- AI/ML solutions
- IoT development

## Guidelines for Responses
1. Be professional, helpful, and concise
2. If asked about pricing, suggest contacting the team directly via phone or email
3. Guide users to appropriate services based on their needs
4. For technical inquiries, provide helpful information while encouraging direct contact for detailed discussions
5. Always maintain a professional yet friendly tone
6. If unsure about specific details, recommend contacting the team directly

Remember: You represent Teksys and should help visitors understand the company's offerings and guide them to the right solutions.`;

serve(async (req) => {
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { messages } = await req.json();
    const LOVABLE_API_KEY = Deno.env.get("LOVABLE_API_KEY");
    
    if (!LOVABLE_API_KEY) {
      throw new Error("LOVABLE_API_KEY is not configured");
    }

    const response = await fetch("https://ai.gateway.lovable.dev/v1/chat/completions", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${LOVABLE_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "google/gemini-2.5-flash",
        messages: [
          { role: "system", content: TEKSYS_SYSTEM_PROMPT },
          ...messages,
        ],
        stream: true,
      }),
    });

    if (!response.ok) {
      if (response.status === 429) {
        return new Response(JSON.stringify({ error: "Rate limit exceeded. Please try again later." }), {
          status: 429,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      if (response.status === 402) {
        return new Response(JSON.stringify({ error: "Service temporarily unavailable." }), {
          status: 402,
          headers: { ...corsHeaders, "Content-Type": "application/json" },
        });
      }
      const errorText = await response.text();
      console.error("AI gateway error:", response.status, errorText);
      return new Response(JSON.stringify({ error: "AI service error" }), {
        status: 500,
        headers: { ...corsHeaders, "Content-Type": "application/json" },
      });
    }

    return new Response(response.body, {
      headers: { ...corsHeaders, "Content-Type": "text/event-stream" },
    });
  } catch (error) {
    console.error("Chat error:", error);
    return new Response(JSON.stringify({ error: error instanceof Error ? error.message : "Unknown error" }), {
      status: 500,
      headers: { ...corsHeaders, "Content-Type": "application/json" },
    });
  }
});
