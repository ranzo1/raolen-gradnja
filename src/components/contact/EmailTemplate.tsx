export function emailTemplate(name: string, email: string, message: string) {
  const brand = "#B0A695"; // gold-beige brand color
  const text = "#273029"; // body text color
  const muted = "#6b7280"; // secondary text color
  const bg = "#F5F2ED"; // background color
  const cardBorder = "#e5e7eb";

  return `<!DOCTYPE html>
<html lang="en" style="margin:0;padding:0;">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8" />
    <!-- Prevent iOS auto-scaling -->
    <meta name="x-apple-disable-message-reformatting" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>New message</title>
    <!-- Preheader (hidden preview text) -->
    <style>
      .preheader { display:none !important; visibility:hidden; opacity:0; color:transparent; height:0; width:0; overflow:hidden; mso-hide:all; }
      /* Outlook button fix */
      .btn a { text-decoration:none !important; }
      /* Dark mode friendly links (limited support) */
      @media (prefers-color-scheme: dark) {
        .card { background-color:#141414 !important; }
        .text { color:#e5e7eb !important; }
        .muted { color:#9ca3af !important; }
        .footer { background-color:#0f0f0f !important; color:#9ca3af !important; }
      }
    </style>
  </head>
  <body style="margin:0; padding:0; background:${bg}; font-family: -apple-system, Segoe UI, Roboto, Helvetica, Arial, 'Apple Color Emoji', 'Segoe UI Emoji', sans-serif;">
    <div class="preheader">New inquiry from ${name} • Reply to ${email}</div>

    <!-- Full-width wrapper -->
    <table role="presentation" aria-hidden="true" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse; background:${bg};">
      <tr>
        <td align="center" style="padding:24px 16px;">
          <!-- Constrained container -->
          <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="max-width:640px; border-collapse:separate;">
            <!-- Brand/header card -->
            <tr>
              <td class="card" style="background:#ffffff; border:1px solid ${cardBorder}; border-bottom:0; border-radius:16px 16px 0 0; padding:24px 24px 16px 24px; text-align:center;">
                
                <div style="margin-top:12px; font-size:12px; letter-spacing:1.6px; text-transform:uppercase; color:${muted};">Raolen Gradnja</div>
                <h1 class="text" style="margin:12px 0 0 0; font-size:22px; line-height:1.3; font-weight:700; color:${text}; letter-spacing:-0.2px;">
                  Poruka od ${name}
                </h1>
              </td>
            </tr>

            <!-- Body card -->
            <tr>
              <td class="card" style="background:#ffffff; border:1px solid ${cardBorder}; border-top:0; border-bottom:0; padding:0 24px 0 24px;">
                <!-- Intro -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:20px 0 8px 0;">
                      <p class="muted" style="margin:0; font-size:13px; color:${muted}; text-transform:uppercase; letter-spacing:1.4px; font-weight:600;">Detalji poruke</p>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <div class="text" style="font-size:16px; line-height:1.6; color:${text};">
                        <p style="margin:0 0 10px 0;"><strong style="font-weight:600;">Ime:</strong> ${name}</p>
                        <p style="margin:0 0 16px 0;"><strong style="font-weight:600;">Email:</strong> <a href="mailto:${email}" style="color:${text}; text-decoration:underline; text-decoration-color:${brand};"> ${email}</a></p>
                        <p style="margin:0; white-space:pre-wrap;">${message}</p>
                      </div>
                    </td>
                  </tr>
                </table>

                <!-- Divider -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" width="100%" style="border-collapse:collapse;">
                  <tr>
                    <td style="padding:20px 0;">
                      <div style="height:1px; background:${cardBorder}; width:100%;"></div>
                    </td>
                  </tr>
                </table>

                <!-- CTA -->
                <table role="presentation" cellpadding="0" cellspacing="0" border="0" align="center" style="margin:0 auto 24px auto; border-collapse:separate;">
                  <tr>
                    <td class="btn" bgcolor="${brand}" style="background:${brand}; border-radius:8px;">
                      <a
                        href="mailto:${email}"
                        target="_blank"
                        style="display:inline-block; padding:12px 20px; color:#111827; font-weight:700; font-size:15px; text-decoration:none; letter-spacing:0.2px; border-radius:8px;"
                      >
                        Odgovori
                      </a>
                    </td>
                  </tr>
                </table>

                <!-- Alt link -->
                <p class="muted" style="margin:0 0 24px 0; font-size:12px; color:${muted}; text-align:center;">
                  Ako dugme ne radi, kopirajte ovu adresu: <span style="color:${text};">${email}</span>
                </p>
              </td>
            </tr>

            <!-- Footer card -->
            <tr>
              <td class="footer" style="background:#1f2937; color:#e5e7eb; border:1px solid #111827; border-top:0; border-radius:0 0 16px 16px; padding:18px 24px; text-align:center; font-size:12px;">
                <div style="margin-bottom:6px;">&copy; ${new Date().getFullYear()} Raolen Gradnja</div>
                <div style="opacity:0.8;">Ova poruka je poslata sa kontakt forme na sajtu.</div>
              </td>
            </tr>
          </table>

          <!-- Spacing after card -->
          <div style="height:24px; line-height:24px;">&nbsp;</div>
        </td>
      </tr>
    </table>
  </body>
</html>`;
}
