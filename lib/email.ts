import nodemailer from 'nodemailer';

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.SMTP_EMAIL,
    pass: process.env.SMTP_PASSWORD,
  },
});

export const sendTrainingEmail = async ({
  type,
  customerEmail,
  customerName,
  amount,
  currency,
}: {
  type: 'INITIATED' | 'SUCCESS' | 'CANCELLED';
  customerEmail: string;
  customerName: string;
  amount: string;
  currency: string;
}) => {
  const ownerEmail = process.env.OWNER_EMAIL || process.env.SMTP_EMAIL;

  let customerSubject = '';
  let ownerSubject = '';
  let customerHtml = '';
  let ownerHtml = '';

  const commonStyles = `
    font-family: Arial, sans-serif;
    color: #333;
    line-height: 1.6;
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #e5e7eb;
    border-radius: 8px;
  `;

  if (type === 'INITIATED') {
    customerSubject = 'Payment Initiated - Organic Mushroom Training';
    ownerSubject = `New Training Payment Initiated by ${customerName}`;
    
    customerHtml = `<div style="${commonStyles}">
      <h2 style="color: #7e22ce;">Payment Initiated</h2>
      <p>Hi ${customerName},</p>
      <p>You have initiated a payment of <strong>${currency} ${amount}</strong> for the Organic Mushroom Training program.</p>
      <p>If you haven't completed the payment yet, please return to the website to finish it.</p>
      <p>Best regards,<br/>Organic Mushroom Farm Team</p>
    </div>`;

    ownerHtml = `<div style="${commonStyles}">
      <h2 style="color: #ea580c;">New Payment Initiated</h2>
      <p>A new payment has been initiated for the Training program.</p>
      <ul>
        <li><strong>Customer Name:</strong> ${customerName}</li>
        <li><strong>Customer Email:</strong> ${customerEmail}</li>
        <li><strong>Amount:</strong> ${currency} ${amount}</li>
      </ul>
    </div>`;
  } else if (type === 'SUCCESS') {
    customerSubject = 'Payment Successful - Welcome to Organic Mushroom Training!';
    ownerSubject = `Payment Successful: ${customerName} enrolled in Training`;
    
    customerHtml = `<div style="${commonStyles}">
      <h2 style="color: #16a34a;">Payment Successful!</h2>
      <p>Hi ${customerName},</p>
      <p>Thank you! We have received your payment of <strong>${currency} ${amount}</strong>.</p>
      <p>Welcome to the Organic Mushroom Training program. We will send you further details shortly.</p>
      <p>Best regards,<br/>Organic Mushroom Farm Team</p>
    </div>`;

    ownerHtml = `<div style="${commonStyles}">
      <h2 style="color: #16a34a;">Payment Successful</h2>
      <p>A customer has successfully enrolled in the Training program.</p>
      <ul>
        <li><strong>Customer Name:</strong> ${customerName}</li>
        <li><strong>Customer Email:</strong> ${customerEmail}</li>
        <li><strong>Amount Paid:</strong> ${currency} ${amount}</li>
      </ul>
    </div>`;
  } else if (type === 'CANCELLED') {
    customerSubject = 'Payment Cancelled - Organic Mushroom Training';
    ownerSubject = `Payment Cancelled by ${customerName}`;
    
    customerHtml = `<div style="${commonStyles}">
      <h2 style="color: #dc2626;">Payment Cancelled</h2>
      <p>Hi ${customerName},</p>
      <p>Your payment process for <strong>${currency} ${amount}</strong> was cancelled.</p>
      <p>If you faced any technical issues, please feel free to contact our support team.</p>
      <p>Best regards,<br/>Organic Mushroom Farm Team</p>
    </div>`;

    ownerHtml = `<div style="${commonStyles}">
      <h2 style="color: #dc2626;">Payment Cancelled</h2>
      <p>A customer cancelled their payment for the Training program.</p>
      <ul>
        <li><strong>Customer Name:</strong> ${customerName}</li>
        <li><strong>Customer Email:</strong> ${customerEmail}</li>
      </ul>
    </div>`;
  }

  try {
    // Send to Customer
    await transporter.sendMail({
      from: process.env.SMTP_EMAIL,
      to: customerEmail,
      subject: customerSubject,
      html: customerHtml,
    });
    
    // Send to Owner
    if (ownerEmail) {
      await transporter.sendMail({
        from: process.env.SMTP_EMAIL,
        to: ownerEmail,
        subject: ownerSubject,
        html: ownerHtml,
      });
    }
  } catch (error) {
    console.error('Error sending emails:', error);
  }
};
