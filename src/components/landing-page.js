import React from 'react';
import { Link } from 'react-router-dom';
import { Linkedin as LinkedinIcon } from 'lucide-react';
import emailjs from '@emailjs/browser';


function LandingPage() {
  const submitEmail = async (e) => {
    e.preventDefault();
    try {
      const result = await emailjs.sendForm(
        'service_mboykih',
        'template_gxzp1sa',
        e.target,
        'faPfKPb4j-0cmdt8I'
      );
      if (result.text === 'OK') {
        alert('Thanks for subscribing!');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  return (
    <main className="min-h-screen flex flex-col items-center justify-center p-4 bg-[#fff]">
      <div className="w-full max-w-md mx-auto space-y-8">
        {/* Logo */}
        <div className="flex justify-center">
          <img
            src="/sig_logo.png"
            alt="Rebecca Odim"
            width={400}
            height={200}
          />
        </div>

        {/* Main Content */}
        <div className="text-center space-y-4">
          <h1 className="text-3xl font-semibold tracking-tight">
            Coming Soon
          </h1>
          <p className="text-muted-foreground">
            Something exciting is in the works. Stay tuned for updates.
          </p>
        </div>

        {/* Email Form */}
        <form onSubmit={submitEmail} className="space-y-4">
          <div className="flex flex-col sm:flex-row gap-2">
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 p-2 border rounded"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              Notify Me
            </button>
          </div>
        </form>

        {/* Social Links
        <div className="flex justify-center pt-8">

          <a href="https://linkedin.com/in/bexodim"
            target="_blank"
            rel="noopener noreferrer"
            className="text-muted-foreground hover:text-foreground transition-colors"
          >
            <LinkedinIcon className="w-6 h-6" />
          </a>
        </div>*/}
      </div>
    </main>
  );
}

export default LandingPage;
