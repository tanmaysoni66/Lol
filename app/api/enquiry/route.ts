import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

// In-memory store for rate limiting (Note: resets on serverless cold starts, but good for basic protection)
const ipRequestCounts = new Map<string, { count: number; resetTime: number }>();

const RATE_LIMIT_WINDOW_MS = 2 * 60 * 60 * 1000; // 2 hours
const MAX_REQUESTS = 3;

// Regex for spam detection
const hasUrl = (text: string) => /https?:\/\/|www\.|[a-zA-Z0-9-]+\.(com|org|net|info|biz|ru|in|co|uk)\b/i.test(text);
const hasCyrillic = (text: string) => /[\u0400-\u04FF]/.test(text);

export async function POST(req: NextRequest) {
  try {
    const ip = req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip") || "unknown-ip";
    
    // 3. Rate Limiting Check
    const now = Date.now();
    const userRateData = ipRequestCounts.get(ip);
    
    if (userRateData) {
      if (now > userRateData.resetTime) {
        // Reset if window has passed
        ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
      } else if (userRateData.count >= MAX_REQUESTS) {
        return NextResponse.json(
          { error: "Too many requests. You have reached the limit. Please try again after 2 hours." },
          { status: 429 }
        );
      } else {
        // Increment count
        userRateData.count += 1;
        ipRequestCounts.set(ip, userRateData);
      }
    } else {
      ipRequestCounts.set(ip, { count: 1, resetTime: now + RATE_LIMIT_WINDOW_MS });
    }

    const data = await req.json();
    const {
      serviceType,
      fullName,
      phone,
      email,
      message,
      hp_website,
      load_time,
      
      // Specific fields
      trainingMode,
      mushroomVariety,
      quantity,
      deliveryLocation,
      setupType,
      farmSize,
      farmLocation,
      productForm,
      subjectOfEnquiry,
      securityAnswer,
    } = data;

    // 1. Honeypot Check (Hidden Bot Trap)
    if (hp_website) {
      console.log(`Bot blocked via honeypot. IP: ${ip}`);
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 }); // Fake success
    }

    // 2. Fast Submission Check (Time-based Logic)
    const loadTimeNumber = Number(load_time);
    if (!loadTimeNumber || (now - loadTimeNumber) < 4000) {
      console.log(`Bot blocked via fast submission. IP: ${ip}`);
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 }); // Fake success
    }

    // 5. Essential Data Validation
    if (!fullName || !email || !serviceType || securityAnswer !== "5") {
      return NextResponse.json({ error: "Missing required fields or incorrect security answer." }, { status: 400 });
    }

    // 4. Spam Link & Language Detection
    const textToCheck = `${fullName} ${message || ""} ${subjectOfEnquiry || ""}`;
    if (hasUrl(textToCheck) || hasCyrillic(textToCheck)) {
      console.log(`Bot blocked via spam content (URL/Cyrillic). IP: ${ip}`);
      return NextResponse.json({ message: "Message sent successfully" }, { status: 200 }); // Fake success
    }

    // --- Configure Nodemailer ---
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.SMTP_EMAIL,
        pass: process.env.SMTP_PASSWORD,
      },
    });

    // --- Determine Owner Subject ---
    const getOwnerSubject = () => {
      let subj = "Website Contact Form";
      if (serviceType === "Other" && subjectOfEnquiry) subj = subjectOfEnquiry;
      else subj = serviceType;
      return `New Enquiry: ${subj}`;
    };

    // --- Owner Email HTML ---
    const ownerHtml = `
      <div style="background: linear-gradient(135deg, #e0c3fc 0%, #d5f7d4 33%, #c2e9fb 66%, #ffbaba 100%); padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: rgba(255, 255, 255, 0.85); border-radius: 16px; padding: 30px; box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15); border: 1px solid rgba(255, 255, 255, 0.6);">
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #6a11cb;">Organic Mushroom Farm</h1>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">New Enquiry Received</p>
          </div>
          <table style="width: 100%; border-collapse: collapse; background: rgba(255,255,255,0.7); border-radius: 8px; overflow: hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555; width: 35%;">Name</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${fullName}</td></tr>
            <tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Email</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${email}</td></tr>
            <tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Phone</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${phone || "N/A"}</td></tr>
            <tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Subject</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${getOwnerSubject()}</td></tr>
            <tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Service/Product</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${serviceType}</td></tr>
            ${trainingMode ? `<tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Training Mode</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${trainingMode}</td></tr>` : ""}
            ${mushroomVariety ? `<tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Variety</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${mushroomVariety}</td></tr>` : ""}
            ${quantity ? `<tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Quantity</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${quantity} kg</td></tr>` : ""}
            ${deliveryLocation ? `<tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Delivery Location</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${deliveryLocation}</td></tr>` : ""}
            ${setupType ? `<tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Setup Type</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${setupType}</td></tr>` : ""}
            ${farmSize ? `<tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Farm Size</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${farmSize}</td></tr>` : ""}
            ${farmLocation ? `<tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Farm Location</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${farmLocation}</td></tr>` : ""}
            ${productForm ? `<tr><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); font-weight: 600; color: #555;">Product Form</td><td style="padding: 12px 15px; border-bottom: 1px solid rgba(0,0,0,0.05); color: #333;">${productForm}</td></tr>` : ""}
            <tr><td style="padding: 12px 15px; font-weight: 600; color: #555;">Enquiry Details</td><td style="padding: 12px 15px; color: #333;">${message || "N/A"}</td></tr>
          </table>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.1); text-align: center; color: #777; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Organic Mushroom Farm System.
          </div>
        </div>
      </div>
    `;

    // --- Customer Smart Reply Logic ---
    let smartReplyParagraph = "";

    if (serviceType === "Training") {
      if (trainingMode === "Online (Live Classes)") {
        smartReplyParagraph = `We have received your message regarding a new enquiry for Online Mushroom Training. We are excited to help you learn ${mushroomVariety || 'mushroom'} cultivation from the comfort of your home. Our expert-led online sessions are designed to give you step-by-step guidance. Our team is reviewing your details and will get back to you shortly with the online training schedule and next steps.`;
      } else {
        smartReplyParagraph = `We have received your message regarding a new enquiry for Offline Mushroom Training. We are excited to provide you with hands-on, practical experience in ${mushroomVariety || 'mushroom'} cultivation directly at our farm. Our expert-led sessions will give you ground-level skills. Our team is reviewing your details and will get back to you shortly with upcoming batch dates and location details.`;
      }
    } else if (serviceType === "Spawn") {
      const variety = (mushroomVariety || "").toLowerCase();
      if (variety.includes("button")) smartReplyParagraph = "Button mushrooms are highly in demand, and we ensure the highest quality, first-generation spawn for a premium commercial yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
      else if (variety.includes("oyster")) smartReplyParagraph = "Known for their fast growth and excellent yield, our Oyster spawn is prepared under strict sterile conditions to give you the best results on your farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
      else if (variety.includes("milky")) smartReplyParagraph = "Milky mushrooms are perfect for warmer climates, and we provide robust, high-yielding spawn to ensure a heavy harvest. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
      else if (variety.includes("shiitake")) smartReplyParagraph = "Shiitake is a premium gourmet variety loved for its flavor. We provide vigorous, contamination-free spawn to help you grow the best quality mushrooms. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
      else if (variety.includes("lion's mane")) smartReplyParagraph = "Cultivating this unique and highly medicinal mushroom requires premium genetics. We ensure the highest quality spawn to support your specialized farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
      else if (variety.includes("cordyceps")) smartReplyParagraph = "Cordyceps cultivation is highly specialized, and we take pride in offering strong, pure commercial-grade cultures for maximum potency and yield. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
      else smartReplyParagraph = "We ensure the highest quality spawn to support your farm. Our team is reviewing your requirement and will get back to you as soon as possible with pricing and availability.";
    } else if (serviceType === "Setup") {
      if (setupType?.includes("AC Commercial")) smartReplyParagraph = "Setting up a climate-controlled commercial farm is a smart step towards consistent, year-round mushroom production and high commercial yields. Our experts specialize in providing end-to-end turnkey solutions.";
      else if (setupType?.includes("Non-AC Seasonal")) smartReplyParagraph = "Seasonal hut structures are a highly cost-effective and natural way to start your mushroom farming journey. Our experts will help you design a setup that maximizes your seasonal yield.";
      else if (setupType?.includes("PUF Panel")) smartReplyParagraph = "A PUF panel structure ensures premium insulation, energy efficiency, and long-term durability for advanced mushroom cultivation.";
      else if (setupType?.includes("Consultancy")) smartReplyParagraph = "Whether you are planning a new farm from scratch, upgrading your existing setup, or looking for expert business guidance, we are here to help you make the right technical and financial decisions.";
      else smartReplyParagraph = "Our experts specialize in providing end-to-end turnkey solutions. Our team is reviewing your details and will get back to you shortly.";
    } else if (serviceType === "Buy Mushrooms") {
      const variety = (mushroomVariety || "").toLowerCase();
      const form = (productForm || "").toLowerCase();
      
      if (form.includes("fresh")) {
        if (variety.includes("button")) smartReplyParagraph = "We take pride in delivering farm-to-table, organically grown fresh Button mushrooms that guarantee premium taste and top-tier quality for your culinary or commercial needs.";
        else if (variety.includes("oyster")) smartReplyParagraph = "We take pride in delivering farm-to-table, organically grown fresh Oyster mushrooms, known for their delicate texture and rich flavor. We ensure the best harvest reaches you.";
        else if (variety.includes("milky")) smartReplyParagraph = "We take pride in delivering farm-to-table, organically grown fresh Milky mushrooms, valued for their long shelf life and meaty texture. We ensure the best harvest reaches you.";
        else if (variety.includes("shiitake")) smartReplyParagraph = "We take pride in delivering farm-to-table, organically grown fresh Shiitake mushrooms, perfect for gourmet dishes. We ensure this premium harvest reaches you in top condition.";
        else if (variety.includes("lion's mane")) smartReplyParagraph = "We take pride in delivering farm-to-table, organically grown fresh Lion's Mane mushrooms, celebrated for their unique appearance and health benefits. We ensure the best harvest reaches you.";
        else if (variety.includes("cordyceps")) smartReplyParagraph = "We take pride in cultivating and delivering premium, organically grown fresh Cordyceps, known for their powerful medicinal properties. We ensure the best quality reaches you.";
        else smartReplyParagraph = "We take pride in delivering farm-to-table, organically grown fresh mushrooms. We ensure the best harvest reaches you.";
      } else if (form.includes("dry")) {
        if (variety.includes("button")) smartReplyParagraph = "Our naturally dehydrated Button mushrooms retain their classic flavor and nutritional value while offering a long shelf life. They are perfect for culinary and commercial use.";
        else if (variety.includes("oyster")) smartReplyParagraph = "Our naturally dehydrated Oyster mushrooms retain their rich flavor, aroma, and nutritional value while offering a long shelf life. They are perfect for culinary, medicinal, and commercial use.";
        else if (variety.includes("milky")) smartReplyParagraph = "Our naturally dehydrated Milky mushrooms retain their robust texture and nutritional value while offering an excellent shelf life. They are perfect for various culinary applications.";
        else if (variety.includes("shiitake")) smartReplyParagraph = "Our naturally dehydrated Shiitake mushrooms concentrate their famous umami flavor and nutritional value while offering a long shelf life. They are essential for premium culinary use.";
        else if (variety.includes("lion's mane")) smartReplyParagraph = "Our naturally dehydrated Lion's Mane mushrooms retain their neuro-supportive properties and nutritional value while offering a long shelf life. They are perfect for health and culinary use.";
        else if (variety.includes("cordyceps")) smartReplyParagraph = "Our carefully dehydrated Cordyceps retain their potent medicinal properties and nutritional value while offering a long shelf life. They are highly sought after for health and commercial use.";
        else smartReplyParagraph = "Our naturally dehydrated mushrooms retain their properties and nutritional value while offering a long shelf life.";
      } else if (form.includes("powder")) {
        if (variety.includes("button")) smartReplyParagraph = "Packed with essential nutrients and a versatile flavor profile, our concentrated Button mushroom powder is perfect for soups, sauces, and daily culinary use.";
        else if (variety.includes("oyster")) smartReplyParagraph = "Packed with immunity-boosting properties and essential nutrients, our highly concentrated Oyster mushroom powder is perfect for health supplements, daily consumption, and value-added products.";
        else if (variety.includes("milky")) smartReplyParagraph = "Packed with essential nutrients and protein, our concentrated Milky mushroom powder is an excellent addition to health supplements and protein-rich diets.";
        else if (variety.includes("shiitake")) smartReplyParagraph = "Packed with immunity-boosting properties and rich umami flavor, our highly concentrated Shiitake mushroom powder is perfect for gourmet cooking, health supplements, and daily consumption.";
        else if (variety.includes("lion's mane")) smartReplyParagraph = "Renowned for cognitive support, our highly concentrated Lion's Mane mushroom powder is perfect for premium health supplements, daily consumption, and wellness products.";
        else if (variety.includes("cordyceps")) smartReplyParagraph = "Highly valued for its energy and stamina-boosting properties, our concentrated Cordyceps mushroom powder is essential for premium health and sports supplements.";
        else smartReplyParagraph = "Our concentrated mushroom powder is perfect for various culinary and health applications.";
      } else {
         smartReplyParagraph = `We take pride in delivering premium ${mushroomVariety || 'mushroom'} products. Our team is reviewing your requirement and will get back to you shortly.`;
      }
    } else if (serviceType === "Other") {
      const subj = (subjectOfEnquiry || "").toLowerCase();
      if (subj.includes("machinery")) smartReplyParagraph = "Using the right tools is the secret to a high-yielding farm. We provide reliable, commercial-grade farming equipment and machinery tailored to optimize your mushroom production.";
      else if (subj.includes("site visit")) smartReplyParagraph = "An on-ground evaluation is the best way to plan a successful farm. Our experts will thoroughly assess your location, climate, and resources to provide a highly optimized cultivation strategy.";
      else if (subj.includes("marketing")) smartReplyParagraph = "Growing mushrooms is just the first step; selling them at the right price is where the profit lies. We are committed to helping you scale your business through guaranteed buyback options and strategic market linkage.";
      else if (subj.includes("subsidies")) smartReplyParagraph = "Securing funding shouldn't be a hurdle in your farming journey. From preparing detailed project reports (DPR) to navigating government schemes, our experts are here to simplify the financial process for you.";
      else smartReplyParagraph = `We have received your message regarding ${subjectOfEnquiry || 'your query'}. Our team is reviewing it and will get back to you as soon as possible.`;
    }

    const customerHtml = `
      <div style="background: linear-gradient(135deg, #e0c3fc 0%, #d5f7d4 33%, #c2e9fb 66%, #ffbaba 100%); padding: 40px 20px; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;">
        <div style="max-width: 600px; margin: 0 auto; background: rgba(255, 255, 255, 0.85); border-radius: 16px; padding: 30px; box-shadow: 0 8px 32px rgba(31, 38, 135, 0.15); border: 1px solid rgba(255, 255, 255, 0.6);">
          <div style="text-align: center; margin-bottom: 25px;">
            <h1 style="margin: 0; font-size: 24px; font-weight: 800; color: #6a11cb;">Organic Mushroom Farm</h1>
            <p style="margin: 5px 0 0 0; color: #666; font-size: 14px;">Thank you for contacting us!</p>
          </div>
          <div style="background: rgba(255, 255, 255, 0.7); padding: 25px; border-radius: 8px; color: #444; line-height: 1.6; font-size: 15px; box-shadow: 0 2px 8px rgba(0,0,0,0.05);">
            <p style="margin-top: 0;">Hi <strong>${fullName}</strong>,</p>
            <p>Thank you for reaching out to us! ${smartReplyParagraph}</p>
            <p style="margin-bottom: 0;">Warm regards,<br/><strong style="color: #6a11cb;">The Organic Mushroom Farm Team</strong></p>
          </div>
          <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid rgba(0,0,0,0.1); text-align: center; color: #777; font-size: 12px;">
            &copy; ${new Date().getFullYear()} Organic Mushroom Farm. All rights reserved.
          </div>
        </div>
      </div>
    `;

    if (!process.env.SMTP_EMAIL || !process.env.SMTP_PASSWORD) {
        console.warn("SMTP credentials not configured. Skipping email send.");
        // We will still return success for the frontend to show the user it "worked" 
        return NextResponse.json({ message: "Message sent successfully (Simulation due to missing credentials)" }, { status: 200 });
    }

    // Send email to owner
    await transporter.sendMail({
      from: `"Website Enquiry" <${process.env.SMTP_EMAIL}>`,
      to: "organicmushroomsfarms@gmail.com",
      subject: getOwnerSubject(),
      html: ownerHtml,
    });

    // Send auto-reply to customer
    await transporter.sendMail({
      from: `"Organic Mushroom Farm" <${process.env.SMTP_EMAIL}>`,
      replyTo: "no-reply@organicmushroomsfarm.com",
      to: email,
      subject: `Thank you for reaching out, ${fullName}!`,
      html: customerHtml,
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Email send error:", error);
    return NextResponse.json({ error: "Failed to send message. Please try again later." }, { status: 500 });
  }
}
