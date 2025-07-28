'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { adminService } from '@/lib/admin'
import type { EventFormData } from '@/lib/types'
import EventForm from '@/components/EventForm'

export default function NewEventPage() {
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()

  const handleSubmit = async (data: EventFormData) => {
    setLoading(true)
    setError('')

    try {
      await adminService.createEvent(data)
      router.push('/admin/events')
    } catch (error: any) {
      setError(error.message || 'Failed to create event')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              <button 
                onClick={() => router.push('/admin/events')}
                className="text-[#003594] hover:text-[#002266] mr-4"
              >
                ← Back to Events
              </button>
              <img className="h-8 w-auto" src="/logo.svg" alt="OWASP" />
              <h1 className="ml-4 text-xl font-semibold text-gray-900">Add New Event</h1>
            </div>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto py-6 sm:px-6 lg:px-8">
        {error && (
          <div className="mb-4 bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded">
            {error}
          </div>
        )}

        <div className="bg-white shadow sm:rounded-lg">
          <div className="px-4 py-5 sm:p-6">
            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-6">
              Event Details
            </h3>
            <EventForm onSubmit={handleSubmit} loading={loading} />
          </div>
        </div>
      </div>
    </div>
  )
} 