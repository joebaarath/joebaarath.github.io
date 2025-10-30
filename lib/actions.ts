'use server'

export async function submitContactForm(formData: FormData) {
  const name = formData.get('name') as string
  const email = formData.get('email') as string
  const message = formData.get('message') as string

  // For now, just log to console
  // In production, you would send an email or save to database
  console.log('Contact Form Submission:', {
    name,
    email,
    message,
    timestamp: new Date().toISOString()
  })

  // Simulate processing time
  await new Promise(resolve => setTimeout(resolve, 1000))

  return { success: true, message: 'Thank you for your message! I\'ll get back to you soon.' }
}


