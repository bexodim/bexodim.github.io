'use client'

import { useState } from 'react'
import emailjs from '@emailjs/browser';


const submitMessage = async (formData) => {
    try {
      const result = await emailjs.sendForm(
        'service_mboykih',
        // 'template_gxzp1sa',
        'template_27sg56x',
        formData,
        'faPfKPb4j-0cmdt8I'
      );
      if (result.text === 'OK') {
        return { success: true };
      }
    } catch (error) {
      console.error('Error:', error);
      return { error: 'Failed to send message' };
    }
};

export function ContactForm() {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault(); // Prevent form submission
      setIsLoading(true);

      try {
        const result = await submitMessage(e.target);

        if (result.error) {
          setMessage(result.error);
        } else {
          setMessage('Thank you for signing up! We\'ll keep you updated.');
          setEmail('');
        }
      } catch (error) {
        setMessage('An error occurred while sending the message');
      } finally {
        setIsLoading(false);
      }
  };


  return (
    <section className="max-w-6xl mx-auto py-20 px-4" id="connect">
      <h2 className="text-2xl text-2xl mb-8">LET'S CONNECT</h2>
      <div className="max-w-2xl">
        <p className="mb-8">
          If you have a project in mind or think we might have some shared values and
          goals, I'd love to talk! Reach out to me at rebecca@bexodim.com or fill out the
          form below.
        </p>
        <form onSubmit={handleSubmit} className="mt-8 space-y-6">
          <label htmlFor="name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">NAME (REQUIRED)</label>
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="first-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">FIRST</label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>
            <div className="space-y-2">
              <label htmlFor="last-name" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">LAST</label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
            </div>
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">EMAIL (REQUIRED)</label>
            <input
                type="email"
                name="email"
                id="email"
                required
                className="flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm"
              />
          </div>
          <div className="space-y-2">
            <label htmlFor="message-content" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">MESSAGE (REQUIRED)</label>
            <textarea
              id="message-content"
              name="message-content"
              required
              className="flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm min-h-[200px]"
            />
          </div>
          <button
            type="submit"
            disabled={isLoading}
            className="inline-block bg-[#3B432B] text-white px-12 py-6 text-md font-extrabold uppercase hover:bg-opacity-90 transition-colors"
          >{isLoading ? 'Sending...' : "Send"}</button>

          {message && (
            <p className={`mt-2 text-sm ${message.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  )
}

