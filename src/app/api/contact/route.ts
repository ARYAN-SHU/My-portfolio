import { NextRequest, NextResponse } from 'next/server'

export async function POST(request: NextRequest) {
  try {
    const { name, email, message } = await request.json()

    // Here you would typically send an email or save to a database
    // For this demo, we'll just log it and return success
    console.log('Contact form submission:', { name, email, message })

    // Simulate email sending or database save
    await new Promise(resolve => setTimeout(resolve, 1000))

    return NextResponse.json({ message: 'Message sent successfully' }, { status: 200 })
  } catch (error) {
    console.error('Error processing contact form:', error)
    return NextResponse.json({ message: 'Internal server error' }, { status: 500 })
  }
}