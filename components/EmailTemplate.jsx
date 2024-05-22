export function emailTemplate(name, email, message) {
  return `<body style="font-family: 'Poppins', Arial, sans-serif">
  <table width="100%" border="0" cellspacing="0" cellpadding="0">
      <tr>
          <td align="center" style="padding: 30px;">
              <table class="content" width="600" border="0" cellspacing="0" cellpadding="0" style="border-collapse: collapse; border: 1px solid #cccccc;">
                  <!-- Header -->
                  <tr>
                      <td class="header" style="background-color: #B0A695; padding: 40px; text-align: center; color: white; font-size: 24px;">
                      Poruka od ${email}
                      </td>
                  </tr>

                  <!-- Body -->
                  <tr>
                      <td class="body" style="padding: 40px; text-align: left; font-size: 18px; line-height: 1.6;">
                      ${name} <br>
                      ${message}
                      </td>
                  </tr>

                  <!-- Call to action Button -->
                  <tr>
                      <td style="padding: 0px 40px 0px 40px; text-align: center;">
                          <!-- CTA Button -->
                          <table cellspacing="0" cellpadding="0" style="margin: auto;">
                              <tr>
                                  <td align="center" style="background-color: #B0A695; padding: 12px 22px; border-radius: 5px;">
                                      <a href="mailto:${email}" target="_blank" style="color: #ffffff; text-decoration: none; font-weight: bold; font-size: 16px;">Odgovori</a>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr>
                      <td class="body" style="padding: 40px; text-align: left; font-size: 16px; line-height: 1.6;">
                                    
                      </td>
                  </tr>
                  <!-- Footer -->
                  <tr>
                      <td class="footer" style="background-color: #333333; padding: 40px; text-align: center; color: white; font-size: 14px;">
                      Copyright &copy; 2024 | Raolen Gradnja
                      </td>
                  </tr>
              </table>
          </td>
      </tr>
  </table>
</body>`;
}
