'use client'

import { useState, useEffect } from 'react'

// Force dynamic rendering for admin pages
export const dynamic = 'force-dynamic'
import { useRouter, useParams } from 'next/navigation'
import { adminService } from '@/lib/admin'
import type { Event, EventFormData } from '@/lib/types'
import EventForm from '@/components/EventForm'

export default function EditEventPage() {
  const [event, setEvent] = useState<Event | null>(null)
  const [loading, setLoading] = useState(true)
  const [saving, setSaving] = useState(false)
  const [error, setError] = useState('')
  const router = useRouter()
  const params = useParams()
  const eventId = params.id as string

  useEffect(() => {
    loadEvent()
  }, [eventId])

  const loadEvent = async () => {
    try {
      const isAuth = await adminService.checkAuth()
      if (!isAuth) {
        router.push('/admin')
        return
      }

      const eventData = await adminService.getEvent(eventId)
      if (!eventData) {
        setError('Event not found')
        return
      }
      
      setEvent(eventData)
    } catch (error: any) {
      setError(error.message || 'Failed to load event')
    } finally {
      setLoading(false)
    }
  }

  const handleSubmit = async (data: EventFormData) => {
    setSaving(true)
    setError('')

    try {
      await adminService.updateEvent(eventId, data)
      router.push('/admin/events')
    } catch (error: any) {
      setError(error.message || 'Failed to update event')
    } finally {
      setSaving(false)
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#003594]"></div>
      </div>
    )
  }

  if (error && !event) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h3 className="text-lg font-medium text-gray-900">Error</h3>
          <p className="mt-2 text-sm text-gray-600">{error}</p>
          <button
            onClick={() => router.push('/admin/events')}
            className="mt-4 text-[#003594] hover:text-[#002266]"
          >
            ← Back to Events
          </button>
        </div>
      </div>
    )
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
              <h1 className="ml-4 text-xl font-semibold text-gray-900">
                Edit Event: {event?.title}
              </h1>
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
            {event && (
              <EventForm 
                initialData={event}
                onSubmit={handleSubmit} 
                loading={saving} 
              />
            )}
          </div>
        </div>
      </div>
    </div>
  )
} 