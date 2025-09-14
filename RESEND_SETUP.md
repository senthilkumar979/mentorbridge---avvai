# Resend API Setup Guide

This guide will help you set up the Resend API to enable email functionality in the contact form.

## Step 1: Create a Resend Account

1. Go to [https://resend.com](https://resend.com)
2. Sign up for a free account
3. Verify your email address

## Step 2: Get Your API Key

1. Log in to your Resend dashboard
2. Navigate to "API Keys" in the sidebar
3. Click "Create API Key"
4. Give it a name (e.g., "MentorBridge Contact Form")
5. Copy the generated API key

## Step 3: Configure Environment Variables

1. Create a `.env.local` file in your project root
2. Add the following line:
   ```
   RESEND_API_KEY=your_actual_api_key_here
   ```
3. Replace `your_actual_api_key_here` with the API key you copied from Resend

## Step 4: Verify Your Domain (For Production)

1. In the Resend dashboard, go to "Domains"
2. Click "Add Domain"
3. Enter your domain (e.g., `mentorbridge.in`)
4. Follow the DNS verification steps
5. Once verified, update the `from` field in `/src/app/api/contact/route.ts`:
   ```typescript
   from: 'MentorBridge Contact <noreply@mentorbridge.in>',
   ```

## Step 5: Test the Contact Form

1. Start your development server: `npm run dev`
2. Navigate to the contact section
3. Fill out and submit the form
4. Check your email for the notification

## Troubleshooting

### Common Issues:

1. **"Failed to send email" error**: Check that your API key is correct and properly set in `.env.local`

2. **Domain verification issues**: For development, you can use the default Resend domain (`onboarding@resend.dev`). For production, you must verify your own domain.

3. **Rate limiting**: Resend has rate limits. The free tier allows 3,000 emails per month and 100 emails per day.

### Testing in Development:

- The contact form will send emails to `senthilkumar@mentorbridge.in`
- You can change the recipient email in `/src/app/api/contact/route.ts` by updating the `to` field

## Security Notes

- Never commit your `.env.local` file to version control
- Keep your API key secure and don't share it publicly
- Consider implementing rate limiting for production use

## Email Template

The contact form sends a nicely formatted HTML email with:
- Contact details (name, email, timestamp)
- The user's message
- Professional styling
- Clear identification that it came from the MentorBridge contact form
