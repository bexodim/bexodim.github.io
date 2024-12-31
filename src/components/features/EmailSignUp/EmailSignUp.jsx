'use client'

import { useState } from 'react'
import { submitEmail } from '../actions/submit-email'

export function EmailSignupForm() {
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsLoading(true)
    
    const formData = new FormData(e.currentTarget)
    const result = await submitEmail(formData)

    if (result.error) {
      setMessage(result.error)
    } else {
      setMessage('Thank you for signing up! We\'ll keep you updated.')
      setEmail('')
    }

    setIsLoading(false)
  }

  return (
    <form onSubmit={handleSubmit} className="mt-8 space-y-6">
      <div className="rounded-md shadow-sm -space-y-px">
        <input
          type="email"
          name="email"
          required
          className="appearance-none rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-gray-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
          placeholder="Enter your email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          type="submit"
          disabled={isLoading}
          className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-b-md text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 disabled:opacity-50"
        >
          {isLoading ? 'Sending...' : 'Notify Me'}
        </button>
      </div>
      {message && (
        <p className={`mt-2 text-sm ${message.includes('error') ? 'text-red-600' : 'text-green-600'}`}>
          {message}
        </p>
      )}
    </form>
  )
}

