import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  const body = await readBody<{
    name?: string
    email?: string
    message?: string
  }>(event)

  const name = body?.name?.trim() || ''
  const email = body?.email?.trim() || ''
  const message = body?.message?.trim() || ''

  if (!name || !email || !message) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Name, email, and message are required.',
    })
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!emailRegex.test(email)) {
    throw createError({
      statusCode: 400,
      statusMessage: 'Please provide a valid email address.',
    })
  }

  const config = useRuntimeConfig(event)
  const gmailUser = config.gmailUser || process.env.GMAIL_USER
  const gmailAppPassword = config.gmailAppPassword || process.env.GMAIL_APP_PASSWORD
  const recipient = gmailUser || 'gunawandzakwans@gmail.com'

  if (!gmailUser || !gmailAppPassword) {
    throw createError({
      statusCode: 500,
      statusMessage:
        'Gmail API is not configured yet. Please set GMAIL_USER and GMAIL_APP_PASSWORD in environment variables.',
    })
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailAppPassword,
    },
  })

  try {
    await transporter.sendMail({
      from: `"Portfolio Contact — ${name}" <${gmailUser}>`,
      to: recipient,
      replyTo: email,
      subject: `[Portfolio] Pesan Baru dari ${name}`,
      text: `Nama: ${name}\nEmail: ${email}\n\nPesan:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e2e8f0; border-radius: 12px;">
          <h2 style="margin-top: 0; color: #0ea5e9;">Pesan Baru dari Portofolio</h2>
          <p><strong>Nama:</strong> ${name.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          <p><strong>Email:</strong> ${email.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
          <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 16px 0;" />
          <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/</g, '&lt;').replace(/>/g, '&gt;')}</p>
        </div>
      `,
    })

    return {
      success: true,
      message: 'Email sent successfully.',
    }
  } catch (err) {
    console.error('Gmail send error:', err)
    throw createError({
      statusCode: 500,
      statusMessage: 'Failed to send email via Gmail. Please try again later.',
    })
  }
})
