import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, company, message, locale } = await request.json()

    const res = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: 'LEMARS Website <onboarding@resend.dev>',
        to: ['cagatayerdal@icloud.com'],
        subject: `[LEMARS] Yeni İletişim Formu: ${name}`,
        html: `
          <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
            <h2 style="color: #E8571B;">Yeni İletişim Formu</h2>
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666; width: 120px;">İsim:</td>
                <td style="padding: 8px 0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">E-posta:</td>
                <td style="padding: 8px 0;"><a href="mailto:${email}">${email}</a></td>
              </tr>
              ${company ? `<tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Şirket:</td>
                <td style="padding: 8px 0;">${company}</td>
              </tr>` : ''}
              <tr>
                <td style="padding: 8px 0; font-weight: bold; color: #666;">Dil:</td>
                <td style="padding: 8px 0;">${locale === 'tr' ? 'Türkçe' : 'English'}</td>
              </tr>
            </table>
            <hr style="border: none; border-top: 1px solid #eee; margin: 16px 0;" />
            <h3 style="color: #333;">Mesaj:</h3>
            <p style="color: #555; line-height: 1.6;">${message.replace(/\n/g, '<br>')}</p>
          </div>
        `,
      }),
    })

    if (res.ok) {
      return NextResponse.json({ success: true })
    }

    const errorData = await res.json()
    return NextResponse.json({ error: errorData }, { status: 500 })
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 })
  }
}
